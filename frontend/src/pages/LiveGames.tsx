import React, { useEffect, useState, useRef, useCallback } from 'react';
import debounce from 'lodash.debounce';

interface SocketMsg { timeStamp: string; gamePk: string; updateId: string; }

const LiveGames: React.FC<{ gamePk: number }> = ({ gamePk }) => {
  const [liveData, setLiveData] = useState<any>(null);
  const [error, setError] = useState<string | null>(null);
  const wsRef = useRef<WebSocket | null>(null);
  const pingTimer = useRef<ReturnType<typeof setInterval> | null>(null);
  const reconnectAttempts = useRef(0);

  const updateLiveData = useCallback(debounce((data) => {
    setLiveData(data);
  }, 1000), []);

  const connect = () => {
    const ws = new WebSocket(`wss://ws.statsapi.mlb.com/api/v1/game/push/subscribe/gameday/${gamePk}`);
    wsRef.current = ws;

    ws.onopen = () => {
      reconnectAttempts.current = 0;
      setError(null);
      pingTimer.current = window.setInterval(() => ws.send('Gameday5'), 60000);
    };

    ws.onmessage = async ({ data }) => {
      try {
        const msg: SocketMsg = JSON.parse(data);
        const url = new URL(`/api/v1.1/game/${gamePk}/feed/live/diffPatch`, 'https://statsapi.mlb.com');
        url.searchParams.set('startTimecode', msg.timeStamp);
        url.searchParams.set('pushUpdateId', msg.updateId);

        const res = await fetch(url.toString());
        const json = await res.json();
        const newData = Array.isArray(json) ? json.find((d:any) => d.liveData)?.liveData : json.liveData;
        if (newData) updateLiveData(newData);
      } catch (e) {
        console.error('Live feed error', e);
      }
    };

    ws.onclose = () => handleReconnect();
    ws.onerror = () => {
      setError('Connection error – reconnecting...');
      ws.close();
    };
  };

  const handleReconnect = () => {
    if (pingTimer.current) clearInterval(pingTimer.current);
    const attempt = reconnectAttempts.current++;
    const delay = Math.min(500 * 2 ** attempt + Math.random() * 1000, 30000);
    console.warn(`Reconnecting in ${delay | 0} ms…`);
    setTimeout(connect, delay);
  };

  useEffect(() => {
    connect();
    return () => {
      wsRef.current?.close();
      if (pingTimer.current) clearInterval(pingTimer.current);
    };
  }, [gamePk]);

  if (error) return <div className="error">{error}</div>;
  if (!liveData) return <div>Loading live game…</div>;

  const { linescore, plays: { currentPlay } } = liveData;
  const { inning, inningState, outs, balls, strikes } = liveData.plays.currentPlay.about;
  const { away, home } = linescore.teams;

  const pingTimer = useRef<ReturnType<typeof setInterval> | null>(null);

ws.onopen = () => {
  pingTimer.current = setInterval(() => ws.send('Gameday5'), 60000);
};

return () => {
  if (pingTimer.current) {
    clearInterval(pingTimer.current);
  }
};


  return (
    <div>
      <h2>Live Score</h2>
      <p>{away.team.abbreviation} {away.runs} – {home.team.abbreviation} {home.runs}</p>
      <p>Inning: {inningState} {inning} | {outs} out | {balls}-{strikes}</p>
      <p>Last Play: {currentPlay.result.description}</p>
    </div>
  );
};

export default LiveGames;

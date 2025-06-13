import React, { useEffect, useState } from 'react';
import GameFilters from '../componets/game/GameFilters';
import GameList from '../componets/game/GameList';
import LiveGames from '../componets/game/LiveGames';

const GamesPage = () => {
  const [games, setGames] = useState([]);

  const [leagueFilter, setLeagueFilter] = useState('');

  useEffect(() => {
    const url = leagueFilter
      ? `http://localhost:3001/games/filter?league=${leagueFilter}`
      : `http://localhost:3001/games`;
  
    fetch(url)
      .then(res => res.json())
      .then(data => setGames(data));
  }, [leagueFilter]);

  return (
    <div>
      <h1>All Games</h1>
      <>
  <GameFilters onLeagueChange={setLeagueFilter} />
  <GameList games={games} />
  <LiveGames />
</>

    </div>
  );
};

export default GamesPage;
export {};

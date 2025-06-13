// components/game/LiveGames.tsx
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

const GameCard = styled.div`
  border-bottom: 1px solid var(--color-navy);
  padding: 0.75rem 1rem;
  background-color: var(--color-offwhite);
  margin: 0.5rem 0;
  border-radius: 4px;
`;

const Title = styled.h2`
  color: var(--color-orange);
  font-family: 'Bebas Neue', sans-serif;
  font-size: 2rem;
`;

const GameText = styled.p`
  font-size: 1rem;
  color: var(--color-black);
`;

interface MlbGame {
  strHomeTeam: string;
  strAwayTeam: string;
  strTimeLocal: string;
  strLeague: string;
}

const LiveGames: React.FC = () => {
  const [mlbGames, setMlbGames] = useState<MlbGame[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchGames = async () => {
      try {
        const res = await fetch('http://localhost:3001/mlb');
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        const data = await res.json();
        setMlbGames(data);
      } catch (err: any) {
        setError(err.message || 'Failed to fetch games');
      } finally {
        setLoading(false);
      }
    };

    fetchGames();
  }, []);

  if (loading) return <p>Loading MLB games...</p>;
  if (error) return <p style={{ color: 'red' }}>Error: {error}</p>;
  if (mlbGames.length === 0) return <p>No live MLB games found for today.</p>;

  return (
    <div>
      <Title>Live MLB Games</Title>
      {mlbGames.map((game, i) => (
        <GameCard key={i}>
          <strong>{game.strHomeTeam} vs {game.strAwayTeam}</strong>
          <GameText>{game.strTimeLocal} — {game.strLeague}</GameText>
        </GameCard>
      ))}
    </div>
  );
};

export default LiveGames;
export {};

//Maps and displays list of games (home/away, league, date)
// components/game/GameList.tsx
import React from 'react';

interface Game {
  id: number;
  teamHome: string;
  teamAway: string;
  date: string;
  location: string;
  league: string;
}

interface GameListProps {
  games: Game[];
}

const GameList: React.FC<GameListProps> = ({ games }) => {
  return (
    <div>
      {games.map((game) => (
        <div key={game.id} style={{ marginBottom: '1rem', border: '1px solid #ccc', padding: '1rem' }}>
          <h3>{game.teamHome} vs {game.teamAway}</h3>
          <p>{game.date} – {game.league}</p>
          <p>{game.location}</p>
        </div>
      ))}
    </div>
  );
};

export default GameList;

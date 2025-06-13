import React, { useEffect, useState } from 'react';
import GameList from '../componets/game/GameList';

const GamesPage = () => {
  const [games, setGames] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3001/games') // or your backend port
      .then(res => res.json())
      .then(data => setGames(data));
  }, []);

  return (
    <div>
      <h1>All Games</h1>
      <GameList games={games} />
    </div>
  );
};

export default GamesPage;

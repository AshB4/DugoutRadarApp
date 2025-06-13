//componets/game/GameFilters.tsx
//Dropdown filters for team, league, date
// components/game/GameFilters.tsx
import React from 'react';

interface FilterProps {
  onLeagueChange: (val: string) => void;
}

const GameFilters: React.FC<FilterProps> = ({ onLeagueChange }) => {
  return (
    <div style={{ marginBottom: '1rem' }}>
      <label htmlFor="league-select">League:</label>
      <select id="league-select" onChange={(e) => onLeagueChange(e.target.value)}>
        <option value="">All</option>
        <option value="MLB">MLB</option>
        <option value="MiLB">MiLB</option>
        <option value="Little League">Little League</option>
      </select>
    </div>
  );
};

export default GameFilters;
export {};
import React from 'react';
import PrimaryButton from '../componets/global/PrimaryButton';
import SecondaryButton from '../componets/global/SecondaryButton';
import Card from '../componets/global/Card';

const Home: React.FC = () => {
  return (
    <div className="container" style={{ paddingTop: '2rem' }}>
      <Card className="home-base-card">
      <h1>Welcome to DugoutRadar ⚾</h1>
      <p>This is your baseball data dashboard. Check live stats, team updates, and more.</p>
      </Card>

      <PrimaryButton label="Start Tracking" onClick={() => alert('Tracking started')} />
      <SecondaryButton label="View Games" onClick={() => alert('Showing games')} />
    </div>
  );
};

export default Home;
export {};

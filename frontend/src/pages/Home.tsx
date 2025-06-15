import React from 'react';
import styled from 'styled-components';
import PrimaryButton from '../componets/global/PrimaryButton';
import SecondaryButton from '../componets/global/SecondaryButton';
import Card from '../componets/global/Card';
import DynamicBg from '../componets/global/DynamicBg';

const HomeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem 1rem;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  min-height: 100vh; /* ensures background fills viewport */

  @media (min-width: 1024px) {

  }
`;

const WelcomeBox = styled.div`
  background-color: white;
  border-radius: 8px;
  padding: 2rem;
  max-width: 600px;
  width: 100%;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  text-align: center;
  font-family: 'Oswald', sans-serif;
  border: 2px solid var(--color-navy);  /* Add navy outline */
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);

  h1 {
    margin-bottom: 1rem;
    color: var(--color-navy);
  }

  p {
    color: var(--color-navy);
    font-size: 1rem;
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 1.5rem;
  flex-wrap: wrap;
  justify-content: center;
`;

const Home: React.FC = () => {
  return (
    <DynamicBg>
    <HomeWrapper>

      <WelcomeBox className="home-base-card">
        <h1>Welcome to DugoutRadar ⚾</h1>
        <p>This is your baseball data dashboard. Check live stats, team updates, and more.</p>
      </WelcomeBox>

      <ButtonGroup>
        <PrimaryButton label="Start Tracking" onClick={() => alert('Tracking started')} />
        <SecondaryButton label="View Games" onClick={() => alert('Showing games')} />
      </ButtonGroup>

      {/* <LiveGameBanner>Live Now: Yankees vs. Cubs – Bottom 5th</LiveGameBanner>
<GamePreview title="Upcoming Games">
  - LA Tigers vs. Houston Hawks @ 3PM  
  - Baton Rouge Braves vs. Shreveport Sox @ 5:30PM
</GamePreview>

<SearchSection>
  <h2>Find Your Team</h2>
  <input placeholder="Search by team, league, or date" />
</SearchSection> */}



    </HomeWrapper>
    </DynamicBg>
  );
};

export default Home;
export {};

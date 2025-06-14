import React from 'react';
import styled from 'styled-components';
import PrimaryButton from '../componets/global/PrimaryButton';
import SecondaryButton from '../componets/global/SecondaryButton';
import Card from '../componets/global/Card';

const HomeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem 1rem;
`;

const CenteredCard = styled(Card)`
  max-width: 600px;
  width: 100%;
  text-align: center;

  h1 {
    margin-bottom: 1rem;
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
    <HomeWrapper>
      <CenteredCard className="home-base-card">
        <h1>Welcome to DugoutRadar ⚾</h1>
        <p>This is your baseball data dashboard. Check live stats, team updates, and more.</p>
      </CenteredCard>

      <ButtonGroup>
        <PrimaryButton label="Start Tracking" onClick={() => alert('Tracking started')} />
        <SecondaryButton label="View Games" onClick={() => alert('Showing games')} />
      </ButtonGroup>
    </HomeWrapper>
  );
};

export default Home;
export {};

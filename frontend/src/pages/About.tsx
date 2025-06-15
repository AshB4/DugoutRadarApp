import React from 'react';
import styled from 'styled-components';
import Card from '../componets/global/Card';
import GrassBg from '../assets/GreenGrassWhiteLine.webp';
import DynamicBg from '../componets/global/DynamicBg';

const BackgroundWrapper = styled.div`
  background-image: url(${GrassBg});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  min-height: 100vh;
  width: 100%;
  padding: 2rem 1rem;

  display: flex;
  justify-content: center;
  align-items: center;

  @media (min-width: 768px) {
    padding: 4rem 2rem;
  }
`;

const StyledCard = styled(Card)`
  max-width: 800px;
  width: 100%;
  background-color: rgba(255, 255, 255, 0.95);
  padding: 2rem;
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.1);

  h2, h3, p {
    color: var(--color-navy);
  }

  h2 {
    margin-bottom: 1rem;
  }

  h3 {
    margin-top: 1.5rem;
  }

  p {
    line-height: 1.6;
    font-size: 1rem;
  }
`;

const About: React.FC = () => {
  return (
    <DynamicBg>
    <BackgroundWrapper>
      <StyledCard>
        <h2>About DugoutRadar</h2>

        <h3>From Diamond to Dashboard — We Got You</h3>
        <p>
          DugoutRadar is a streamlined baseball app built for families, fans, and coaches who need real-time
          updates without the clutter. Whether you're tracking MLB stats or Little League schedules, it brings
          everything into one clean, reliable experience.
        </p>

        <h3>Built with Purpose</h3>
        <p>
          I’m Ashley, a full-stack developer with a passion for performance, clarity, and community-driven tools.
          I created DugoutRadar not just to demo technical chops, but to solve a real problem — how fragmented
          and frustrating it is to follow baseball across levels. This app simplifies that experience.
        </p>

        <h3>Why This Matters</h3>
        <p>
          Baseball isn’t just a game — it’s timing, teamwork, and trust. DugoutRadar reflects that.
          The design focuses on responsiveness, accessibility, and real-world usability — things
          I care deeply about as a developer and user.
        </p>

        <h3>Looking Ahead</h3>
        <p>
          This project is still in motion. I’m adding features like coach dashboards, player profiles,
          and league-level filters — all while keeping the code scalable, testable, and clean.
        </p>

        <p style={{ marginTop: '2rem', fontStyle: 'italic' }}>
          Less guesswork. More game time.
        </p>
      </StyledCard>
    </BackgroundWrapper>
    </DynamicBg>
  );
};

export default About;
export {};

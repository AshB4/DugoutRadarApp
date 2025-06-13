// src/components/global/Footer.tsx
import React from 'react';
import styled from 'styled-components';

const FooterWrapper = styled.footer`
  width: 100%;
  padding: 1.5rem;
  background-color: var(--color-navy);
  color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-family: 'Oswald', sans-serif;

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
    gap: 1rem;
  }
`;

const FooterText = styled.p`
  margin: 0;
  font-size: 0.875rem;
`;

const FooterLinks = styled.div`
  display: flex;
  gap: 1rem;

  a {
    color: var(--color-ice);
    text-decoration: none;
    font-weight: bold;

    &:hover {
      color: var(--color-gold);
    }
  }

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 0.5rem;
  }
`;

const Footer: React.FC = () => {
  return (
    <FooterWrapper>
      <FooterText>© 2025 DugoutRadar. All rights reserved.</FooterText>
      <FooterLinks>
        <a href="#">Privacy</a>
        <a href="#">Terms</a>
        <a href="#">Contact</a>
      </FooterLinks>
    </FooterWrapper>
  );
};

export default Footer;
export {};

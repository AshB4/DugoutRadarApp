import React from 'react';
import styled from 'styled-components';
import logo from '../../assets/DougOutRadarLogo.png';

const FooterWrapper = styled.footer`
  width: 100%;
  padding: 1rem;
  background-color: var(--color-offwhite);
  color: var(--color-navy);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: .75rem;
  font-family: 'Oswald', sans-serif;

  @media (min-width: 1024px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
`;

const FooterContent = styled.div`
  width: 100%;
  max-width: 1200px;
  padding: 0 1rem; 
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;

  @media (min-width: 1024px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
`;


const FooterLeft = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;


  }
`;

const FooterLogo = styled.img`
  width: 100px;

  @media (min-width: 1024px) {
    width: 120px;
  }
`;

const FooterRight = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 0.5rem;

  @media (min-width: 1024px) {
    align-items: flex-end;
  }
`;

const FooterLinks = styled.div`
  display: flex;
  gap: 1.25rem;
  flex-wrap: wrap;
  justify-content: center;

  a {
    color: var(--color-navy);
    text-decoration: none;
    font-weight: bold;

    &:hover {
      color: var(--color-gold);
    }
  }

  @media (min-width: 1024px) {
    justify-content: flex-end;
  }
`;

const FooterText = styled.p`
  margin: 0;
  font-size: 0.875rem;
  text-align: center;
  color: var(--color-navy);
`;

const Footer: React.FC = () => {
  return (
    <FooterWrapper>
       <FooterContent>
      <FooterLeft>
        <FooterLogo src={logo} alt="DugoutRadar Logo" />
      </FooterLeft>

      <FooterRight>
        <FooterLinks>
          <a href="/privacy">Privacy</a>
          <a href="/terms">Terms</a>
          <a href="/contact">Contact</a>
        </FooterLinks>
        <FooterText>© 2025 DugoutRadar. All rights reserved.</FooterText>
      </FooterRight>
      </FooterContent>
    </FooterWrapper>
  );
};

export default Footer;
export {};

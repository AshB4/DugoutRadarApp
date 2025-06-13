// components/layout/DynamicBg.tsx
import React from 'react';
import styled from 'styled-components';
import { useLocation } from 'react-router-dom';

const BgWrapper = styled.div<{ bgUrl: string }>`
  min-height: 100vh;
  background-image: url(${(props) => props.bgUrl});
  background-size: cover;
  background-position: center;
  background-attachment: fixed; 
  background-repeat: no-repeat;
  background: rgba(255, 255, 255, 0.85);
  backdrop-filter: blur(6px);
  border-radius: 12px;
  padding: 2rem;

  @media (max-width: 768px) {
    background-attachment: scroll;
  }
`;

interface DynamicBgProps {
  children: React.ReactNode;
}

const DynamicBg: React.FC<DynamicBgProps> = ({ children }) => {
  const location = useLocation();
  const path = location.pathname;

  const isMobile = window.innerWidth < 768;

  // Map route to background type or image directly
  const getBackgroundUrl = () => {
    if (path === '/' || path === '/games') {
      return isMobile ? '/images/diamond-mobile.jpg' : '/images/diamond-desktop.jpg';
    }

    if (path === '/terms' || path === '/privacy' || path === '/contact' || path === '/about') {
      return '/images/grass.jpg';
    }

    return '/images/diamond-desktop.jpg'; // fallback
  };

  const bgUrl = getBackgroundUrl();

  return <BgWrapper bgUrl={bgUrl}>{children}</BgWrapper>;
};

export default DynamicBg;

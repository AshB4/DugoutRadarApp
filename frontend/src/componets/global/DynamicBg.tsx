// components/layout/DynamicBg.tsx
import React from 'react';
import styled from 'styled-components';
import { useLocation } from 'react-router-dom';
import BgLappy from '../../assets/LappyBg.webp';
import BgCell from '../../assets/CellBg.webp';
import BgGrass from '../../assets/GreenGrassWhiteLine.webp'


const BgWrapper = styled.div<{ bgUrl: string }>`
  min-height: 100vh;
  background-image: url(${(props) => props.bgUrl});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-attachment: fixed;
  padding: 2rem;
  border-radius: 12px;

  background-color: rgba(255, 255, 255, 0.85);
  backdrop-filter: blur(6px);

  @media (max-width: 768px) {
    background-attachment: scroll;
  }
`;

interface DynamicBgProps {
  children: React.ReactNode;
}

const DynamicBg: React.FC<DynamicBgProps> = ({ children }) => {
  const { pathname } = useLocation();
  const isMobile = window.innerWidth < 768;

  const getBg = () => {
    if (pathname === '/' || pathname === '/games') {
      return isMobile ? BgLappy: BgCell;
    }

    if (['/terms', '/privacy', '/contact', '/about'].includes(pathname)) {
      return BgGrass;
    }

    return isMobile ? BgCell : BgLappy; // fallback to general layout backgrounds
  };

  return <BgWrapper bgUrl={getBg()}>{children}</BgWrapper>;
};

export default DynamicBg;

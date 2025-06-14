import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import logo from '../../assets/DougOutRadarLogo.png';

const Nav = styled.nav`
  background-color: var(--offwhite);
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem 1rem;
  height: 64px;
  width: 100%;
  position: sticky;
  top: 0;
  z-index: 1000;

  @media (min-width: 1024px) {
    height: 128px;
    padding: 1rem 2rem;
  }
`;

const LeftGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const LogoWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  flex-shrink: 0;
  padding-right: 1rem;
  box-sizing: border-box;
  width: auto;


  @media (min-width: 1024px) {
    padding-right: 2rem;
  }
`;

const Logo = styled.img`
  max-width: 200px;
  width: 100%;
  height: auto;
  object-fit: contain;

  @media (min-width: 1024px) {
    max-width: 180px;
  }
`;


const NavLinks = styled.div<{ open: boolean }>`
  display: flex;
  gap: 1.5rem;

  @media (max-width: 768px) {
    position: absolute;
    top: 64px;
    left: 0;
    width: 100%;
    background: var(--color-navy);
    flex-direction: column;
    align-items: flex-start;
    padding: 1rem;
    display: ${({ open }) => (open ? 'flex' : 'none')};
  }
`;

const NavLink = styled(Link)`
  color: white;
  text-decoration: none;
  font-family: 'Oswald', sans-serif;
  font-size: 1.1rem;

  &:hover {
    color: var(--color-gold);
  }

  @media (min-width: 769px) {
    color: var(--color-navy);
  }
`;

const Burger = styled.div`
  display: none;
  cursor: pointer;
  flex-direction: column;
  gap: 5px;

  span {
    height: 3px;
    width: 25px;
    background: var(--color-navy);
    border-radius: 2px;
  }

  @media (max-width: 768px) {
    display: flex;
  }
`;

const NavBar: React.FC = () => {
  const [open, setOpen] = useState(false);

  return (
    <Nav>
      <LeftGroup>
        <Burger onClick={() => setOpen(!open)}>
          <span />
          <span />
          <span />
        </Burger>
        <NavLinks open={open}>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/games">Games</NavLink>
          <NavLink to="/live">Live Scores</NavLink>
          <NavLink to="/add">Add Game</NavLink>
        </NavLinks>
      </LeftGroup>
      <LogoWrapper>
        <Logo src={logo} alt="DougOutRadar Logo" />
      </LogoWrapper>
    </Nav>
  );
};

export default NavBar;
export {};

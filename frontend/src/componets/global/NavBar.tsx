// src/components/NavBar.tsx
import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import logo from '../assets/DougOutRadarLogo.png';

const Nav = styled.nav`
  background-color: var(--color-navy);
  color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.75rem 1.5rem;
  position: sticky;
  top: 0;
  z-index: 1000;
`;

const Logo = styled.img`
  height: 48px;
`;

const NavLinks = styled.div<{ open: boolean }>`
  display: flex;
  gap: 1.5rem;

  @media (max-width: 768px) {
    position: absolute;
    top: 70px;
    left: 0;
    width: 100%;
    background: var(--color-navy);
    flex-direction: column;
    padding: 1rem;
    display: ${({ open }) => (open ? 'flex' : 'none')};
  }
`;

const NavLink = styled(Link)`
  color: white;
  text-decoration: none;
  font-family: 'Oswald', sans-serif;

  &:hover {
    color: var(--color-gold);
  }
`;

const NavContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  padding: 1rem;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
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
    background: white;
    border-radius: 2px;
  }

  @media (max-width: 768px) {
    display: flex;
  }
`;

const NavBar: React.FC = () => {
  const [open, setOpen] = useState(false);

  return (
    <NavContainer>
    <Nav>
      <Logo src={logo} alt="DougOutRadar Logo" />
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
    </Nav>
    </NavContainer>
  );
};

export default NavBar;
export {};
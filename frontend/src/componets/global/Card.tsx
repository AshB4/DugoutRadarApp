import React from 'react';
import styled from 'styled-components';

const HomeBaseCard = styled.div`
  position: relative;
  background-color: var(--color-offwhite);
  border: 2px solid var(--color-navy);
  padding: 2rem;
  margin: 1.5rem 0;
  border-radius: 10px 10px 0 0;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
`;

interface CardProps {
  children: React.ReactNode;
  className?: string;
}

const Card: React.FC<CardProps> = ({ children, className }) => {
  return <HomeBaseCard className={className}>{children}</HomeBaseCard>;
};

export default Card;

import React from 'react';
import styled from 'styled-components';

const GoldButton = styled.button`
  font-family: 'Oswald', sans-serif;
  font-size: 1rem;
  padding: 0.75rem 1.25rem;
  border-radius: 6px;
  border: 2px solid var(--color-gold);
  background-color: transparent;
  color: var(--color-gold);
  cursor: pointer;
  margin: 0.5rem;
  transition: all 0.2s ease-in-out;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.15);

  &:hover, &:active  {
    background-color: var(--color-gold);
    color: var(--color-black);
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.25);
  }
`;

const SecondaryButton: React.FC<{ label: string; onClick?: () => void }> = ({
  label,
  onClick,
}) => {
  return <GoldButton onClick={onClick}>{label}</GoldButton>;
};

export default SecondaryButton;
export {};

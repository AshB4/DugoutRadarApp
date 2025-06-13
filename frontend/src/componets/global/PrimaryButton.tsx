import React from 'react';
import styled from 'styled-components';

const NavyButton = styled.button`
  font-family: 'Oswald', sans-serif;
  font-size: 1rem;
  padding: 0.75rem 1.25rem;
  border-radius: 6px;
  border: 2px solid var(--color-navy);
  background-color: var(--color-navy);
  color: white;
  cursor: pointer;
  margin: 0.5rem;
  transition: all 0.2s ease-in-out;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.15);

  &:hover,&:active  {
    background-color: var(--color-offwhite);
    color: var(--color-navy);
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.25);
  }
`;

const PrimaryButton: React.FC<{ label: string; onClick?: () => void }> = ({
  label,
  onClick,
}) => {
  return <NavyButton onClick={onClick}>{label}</NavyButton>;
};

export default PrimaryButton;
export {};

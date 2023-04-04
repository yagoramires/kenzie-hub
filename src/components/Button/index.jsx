import React from 'react';
import { StyledButton } from './styles';

const Button = ({ color, text, type }) => {
  return (
    <StyledButton color={color} type={type}>
      {text}
    </StyledButton>
  );
};

export default Button;

import React from 'react';

import { Container, Title } from './styles';
import Button from '../Button';

const Form = ({ children, title }) => {
  return (
    <Container>
      <Title>{title}</Title>
      {children}
    </Container>
  );
};

export default Form;

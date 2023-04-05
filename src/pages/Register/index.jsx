import React from 'react';
import { Container } from './styles';

import Navbar from '../../components/Navbar';
import RegisterForm from '../../components/RegisterForm';

const Register = () => {
  return (
    <Container>
      <Navbar route='/' />
      <RegisterForm />
    </Container>
  );
};

export default Register;

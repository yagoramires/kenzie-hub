import React from 'react';
import { Container, Text } from './styles';

import Navbar from '../../components/Navbar';
import Form from '../../components/Form';
import Input from '../../components/Input';
import Button from '../../components/Button';

const Register = () => {
  return (
    <Container>
      <Navbar route='/' />

      <Form title={'Crie sua conta'}>
        <Text>Rapido e grátis, vamos nessa</Text>
        <Input
          label={'E-mail'}
          id={'email'}
          placeholder={'Coloque seu e-mail'}
          type={'email'}
        />
        <Input
          label={'Senha'}
          id={'password'}
          placeholder={'Coloque sua senha'}
          type={'password'}
        />
        <Input
          label={'Confirmar Senha'}
          id={'password'}
          placeholder={'Coloque sua senha'}
          type={'password'}
        />
        <Input
          label={'Bio'}
          id={'password'}
          placeholder={'Coloque sua senha'}
          type={'password'}
        />
        <Input
          label={'Contato'}
          id={'password'}
          placeholder={'Coloque sua senha'}
          type={'password'}
        />
        <Input
          label={'Selecionar Módulo'}
          id={'password'}
          placeholder={'Coloque sua senha'}
          type={'password'}
        />

        <Button color='primary' text='Cadastrar' type='submit' />
      </Form>
    </Container>
  );
};

export default Register;

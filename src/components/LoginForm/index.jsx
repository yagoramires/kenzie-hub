import React, { useContext } from 'react';
import { Container, Title, Redirect, Text } from './styles';
import Input from '../Input';
import { Link } from 'react-router-dom';
import Button from '../Button';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { LoginSchema } from './LoginFormSchema';

import { UserContext } from '../../context/UserContext';

const LoginForm = () => {
  const { handleLogin } = useContext(UserContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(LoginSchema),
  });

  return (
    <Container onSubmit={handleSubmit(handleLogin)}>
      <Title>Login</Title>
      <Input
        label={'E-mail'}
        id={'email'}
        placeholder={'Coloque seu e-mail'}
        type={'email'}
        error={errors?.email?.message}
        register={register}
      />
      <Input
        label={'Senha'}
        id={'password'}
        placeholder={'Coloque sua senha'}
        type={'password'}
        error={errors?.password?.message}
        register={register}
      />

      <Button color='primary' text='Entrar' type='submit' />

      <Redirect>
        <Text>Ainda não possui uma conta?</Text>
        <Link to='/register'>
          <Button color='gray-1' text='Cadastre-se' />
        </Link>
      </Redirect>
    </Container>
  );
};

export default LoginForm;

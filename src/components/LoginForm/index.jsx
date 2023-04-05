import React from 'react';
import { Container, Title, Redirect, Text } from './styles';
import { useForm } from 'react-hook-form';
import Input from '../Input';
import { Link, useNavigate } from 'react-router-dom';
import Button from '../Button';

import { zodResolver } from '@hookform/resolvers/zod';
import { LoginSchema } from './LoginFormSchema';
import { api } from '../../services/api';

import { toast } from 'react-toastify';

const LoginForm = ({ setUser }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(LoginSchema),
  });

  const navigate = useNavigate();

  const handleLogin = async (formData) => {
    try {
      const res = await api.post('/sessions', formData);
      localStorage.setItem('@TOKEN', res.data.token);
      localStorage.setItem('@USERID', res.data.user.id);

      setUser(res.data.user);

      navigate('/home');
    } catch (e) {
      console.log(e);
      toast.error(e.response.data.message);
    }
  };

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

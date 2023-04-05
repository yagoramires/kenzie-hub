import React from 'react';
import { Container, Title, Text } from './styles';
import { useForm } from 'react-hook-form';
import Input from '../Input';

import Button from '../Button';

import { zodResolver } from '@hookform/resolvers/zod';
import { RegisterSchema } from './RegisterSchema';

const RegisterForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(RegisterSchema),
  });

  const handleRegister = (formData) => {
    console.log(formData);
  };

  return (
    <Container onSubmit={handleSubmit(handleRegister)}>
      <Title>Login</Title>
      <Text>Rapido e grátis, vamos nessa</Text>
      <Input
        label={'Nome'}
        id={'name'}
        placeholder={'Digite aqui seu nome'}
        type={'text'}
        register={register}
        error={errors?.name?.message}
      />
      <Input
        label={'E-mail'}
        id={'email'}
        placeholder={'Digite aqui seu email'}
        type={'email'}
        register={register}
        error={errors?.email?.message}
      />
      <Input
        label={'Senha'}
        id={'password'}
        placeholder={'Digite aqui sua senha'}
        type={'password'}
        register={register}
        error={errors?.password?.message}
      />
      <Input
        label={'Confirmar Senha'}
        id={'confirmPassword'}
        placeholder={'Digite novamente sua senha'}
        type={'password'}
        register={register}
        error={errors?.confirmPassword?.message}
      />
      <Input
        label={'Bio'}
        id={'bio'}
        placeholder={'Fale sobre você'}
        type={'text'}
        register={register}
        error={errors?.bio?.message}
      />
      <Input
        label={'Contato'}
        id={'contact'}
        placeholder={'Opção de contato'}
        type={'text'}
        register={register}
        error={errors?.contact?.message}
      />
      <Input
        label={'Selecionar Módulo'}
        id={'course_module'}
        placeholder={'Primeiro Módulo'}
        type={'string'}
        register={register}
        error={errors?.course_module?.message}
      />

      <Button color='primary' text='Cadastre-se' type='submit' />
    </Container>
  );
};

export default RegisterForm;

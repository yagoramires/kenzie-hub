import { Container, Title, Text, FormSelect, Label, Fieldset } from './styles';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { RegisterSchema } from './RegisterSchema';

import Input from '../Input';
import Button from '../Button';

import { useContext } from 'react';
import { UserContext } from '../../context/UserContext';

const RegisterForm = () => {
  const { handleRegister } = useContext(UserContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(RegisterSchema),
  });

  return (
    <Container onSubmit={handleSubmit(handleRegister)}>
      <Title>Cadastro</Title>
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

      <Fieldset>
        <Label htmlFor={'course_module'}>Selecionar módulo</Label>

        <FormSelect
          name='course_module'
          id='course_module'
          {...register('course_module')}
        >
          <option value='Primeiro módulo (Introdução ao Frontend)'>
            Primeiro módulo (Introdução ao Frontend)
          </option>
          <option value='Segundo módulo (Frontend Avançado)'>
            Segundo módulo (Frontend Avançado)
          </option>
          <option value='Terceiro módulo (Introdução ao Backend)'>
            Terceiro módulo (Introdução ao Backend)
          </option>
          <option value='Quarto módulo (Backend Avançado)'>
            Quarto módulo (Backend Avançado)
          </option>
        </FormSelect>
      </Fieldset>

      <Button color='primary' text='Cadastre-se' type='submit' />
    </Container>
  );
};

export default RegisterForm;

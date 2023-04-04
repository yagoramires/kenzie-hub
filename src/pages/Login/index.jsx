import { Container, Redirect, Text } from './styles';
import { Link } from 'react-router-dom';

import Navbar from '../../components/Navbar';
import Form from '../../components/Form';
import Input from '../../components/Input';
import Button from '../../components/Button';

const Login = () => {
  return (
    <Container>
      <Navbar />
      <Form title={'Login'}>
        <Input
          label={'E-mail'}
          id={'email'}
          placeholder={'Coloque seu e-mail'}
          type={'email'}
          error={'O e-mail não pode ser vazio.'}
        />
        <Input
          label={'Senha'}
          id={'password'}
          placeholder={'Coloque sua senha'}
          type={'password'}
          error={'A senha não pode ser vazia.'}
        />

        <Link to='/home' style={{ width: '100%' }}>
          <Button color='primary' text='Entrar' />
        </Link>

        <Redirect>
          <Text>Ainda não possui uma conta?</Text>
          <Link to='/register'>
            <Button color='gray-1' text='Cadastre-se' />
          </Link>
        </Redirect>
      </Form>
    </Container>
  );
};

export default Login;

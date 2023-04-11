import { Container } from './styles';

import Navbar from '../../components/Navbar';
import LoginForm from '../../components/LoginForm';

const Login = () => {
  return (
    <Container>
      <Navbar />
      <LoginForm />
    </Container>
  );
};

export default Login;

import { Container } from './styles';

import Navbar from '../../components/Navbar';
import LoginForm from '../../components/LoginForm';

const Login = ({ setUser }) => {
  return (
    <Container>
      <Navbar />
      <LoginForm setUser={setUser} />
    </Container>
  );
};

export default Login;

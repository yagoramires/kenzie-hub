import { Container } from './styles';

import Navbar from '../../components/Navbar';
import LoginForm from '../../components/LoginForm';

const Login = () => {
  const handleLogin = (formData) => {
    console.log(formData);
  };

  return (
    <Container>
      <Navbar />
      <LoginForm title={'Login'} submitForm={handleLogin} />
    </Container>
  );
};

export default Login;

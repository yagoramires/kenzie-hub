import { useEffect, useState } from 'react';
import Navbar from '../../components/Navbar';
import {
  Container,
  CenterContainer,
  HeaderContainer,
  MainContainer,
  Header,
  Main,
  Title,
  HeaderText,
  MainText,
} from './styles';
import { api } from '../../services/api';
import { useNavigate } from 'react-router-dom';

const Home = ({ user }) => {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('@TOKEN');
    getUserProfile(token);
  }, []);

  const getUserProfile = async (token) => {
    try {
      const res = await api.get('/profile', {
        headers: {
          Authorization: 'Bearer ' + token,
        },
      });

      if (res.status !== 200) {
        navigate('/login');
      }
    } catch (e) {
      navigate('/login');
      console.log(e);
    }
  };

  const logoutUser = () => {
    localStorage.removeItem('@TOKEN');
    localStorage.removeItem('@USERID');
    navigate('/login');
  };

  return (
    <Container>
      <CenterContainer>
        <Navbar type={'logout'} fn={logoutUser} />
      </CenterContainer>

      <Header>
        <CenterContainer>
          <HeaderContainer>
            <Title>Olá, {user?.name}</Title>
            <HeaderText>{user?.course_module}</HeaderText>
          </HeaderContainer>
        </CenterContainer>
      </Header>

      <Main>
        <CenterContainer>
          <MainContainer>
            <Title>Que pena! Estamos em desenvolvimento :(</Title>
            <MainText>
              Nossa aplicação está em desenvolvimento, em breve teremos
              novidades
            </MainText>
          </MainContainer>
        </CenterContainer>
      </Main>
    </Container>
  );
};

export default Home;

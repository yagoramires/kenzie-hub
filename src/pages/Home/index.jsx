import { useContext, useEffect, useState } from 'react';
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
  MainHeader,
  MainTitle,
  Technologies,
  TechnologyCard,
} from './styles';
import { UserContext } from '../../context/UserContext';
import Button from '../../components/Button';
import AddModal from '../../components/AddModal';

const Home = () => {
  const [openModal, setOpenModal] = useState(false);

  const { user, handleLogout } = useContext(UserContext);

  console.log(user);

  return (
    <Container>
      <CenterContainer>
        <Navbar type={'logout'} fn={handleLogout} />
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
            <AddModal openModal={openModal} closeModal={setOpenModal} />
            <MainHeader>
              <MainTitle>Tecnologias</MainTitle>
              <button onClick={() => setOpenModal(true)}>+</button>
            </MainHeader>
            <Technologies>
              <TechnologyCard>
                <h3>React JS</h3>
                <span>Avançado</span>
              </TechnologyCard>
              <TechnologyCard>
                <h3>React JS</h3>
                <span>Avançado</span>
              </TechnologyCard>
              <TechnologyCard>
                <h3>React JS</h3>
                <span>Avançado</span>
              </TechnologyCard>
              <TechnologyCard>
                <h3>React JS</h3>
                <span>Avançado</span>
              </TechnologyCard>
            </Technologies>
          </MainContainer>
        </CenterContainer>
      </Main>
    </Container>
  );
};

export default Home;

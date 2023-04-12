import { useContext, useState } from 'react';
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
} from './styles';
import Navbar from '../../components/Navbar';
import AddModal from '../../components/AddModal';
import TechnologyCard from '../../components/TechnologyCard';

import { UserContext } from '../../context/UserContext';
import { TechContext } from '../../context/TechContex';

const Home = () => {
  const [openModal, setOpenModal] = useState(false);

  const { user, handleLogout } = useContext(UserContext);
  const { techs } = useContext(TechContext);

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
            <AddModal openModal={openModal} setOpenModal={setOpenModal} />
            <MainHeader>
              <MainTitle>Tecnologias</MainTitle>
              <button onClick={() => setOpenModal(true)}>+</button>
            </MainHeader>
            <Technologies>
              {techs.length > 0 &&
                techs.map((tech, index) => (
                  <TechnologyCard key={index} tech={tech} />
                ))}
            </Technologies>
          </MainContainer>
        </CenterContainer>
      </Main>
    </Container>
  );
};

export default Home;

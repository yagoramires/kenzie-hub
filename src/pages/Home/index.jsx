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

const Home = () => {
  return (
    <Container>
      <CenterContainer>
        <Navbar route={'/'} />
      </CenterContainer>

      <Header>
        <CenterContainer>
          <HeaderContainer>
            <Title>Olá, Samuel Leão</Title>
            <HeaderText>Primeiro módulo (Introdução ao Frontend)</HeaderText>
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

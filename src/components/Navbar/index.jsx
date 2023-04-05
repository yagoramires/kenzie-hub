import React from 'react';
import { Logo, RouterLink, Container, LogoutBtn } from './styles';

const Navbar = ({ route, type, fn }) => {
  return (
    <Container route={route} type={type}>
      <Logo>Kenzie Hub</Logo>
      {route ? (
        <RouterLink to={route}>Voltar</RouterLink>
      ) : type ? (
        <LogoutBtn onClick={fn}>Sair</LogoutBtn>
      ) : null}
    </Container>
  );
};

export default Navbar;

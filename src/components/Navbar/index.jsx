import React from 'react';
import { Logo, RouterLink, Container, LogoutBtn } from './styles';

const Navbar = ({ route, type }) => {
  return (
    <Container route={route} type={type}>
      <Logo>Kenzie Hub</Logo>
      {route ? (
        <RouterLink to={route}>Voltar</RouterLink>
      ) : type ? (
        <LogoutBtn>Sair</LogoutBtn>
      ) : null}
    </Container>
  );
};

export default Navbar;

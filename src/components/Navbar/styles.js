import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.nav`
  padding: 22px 12px;
  display: flex;
  align-items: center;
  width: 100%;
  max-width: ${({ type }) => {
    if (type === 'logout') {
      return css`
        100%
      `;
    } else {
      return css`
        370px
      `;
    }
  }};

  justify-content: ${({ route, type }) => {
    if (route) {
      return css`
        space-between
      `;
    } else if (type === 'logout') {
      return css`
        space-between
      `;
    } else {
      return css`
        center
      `;
    }
  }};
`;

export const Logo = styled.h1`
  color: var(--color-primary);
`;

export const RouterLink = styled(Link)`
  background: var(--gray-3);
  padding: 8px 16px;
  border-radius: 4px;
  text-decoration: none;
  color: var(--gray-0);
`;

export const LogoutBtn = styled.button`
  background: var(--gray-3);
  padding: 8px 22px;
  border-radius: 4px;
  text-decoration: none;
  color: var(--gray-0);
  border: none;
  cursor: pointer;
`;

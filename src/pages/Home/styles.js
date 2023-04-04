import styled from 'styled-components';

export const Container = styled.div``;

export const CenterContainer = styled.div`
  margin: 0 auto;
  max-width: 1200px;
  padding: 0 12px;
`;

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 1024px) {
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    gap: 10px;
  }
`;

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 24px;
`;

export const Header = styled.header`
  padding: 45px 0;
  border-top: 1px solid var(--gray-3);
  border-bottom: 1px solid var(--gray-3);
`;

export const Main = styled.main`
  padding: 45px 0;
`;

export const Title = styled.main`
  font-size: 18px;
  font-weight: bold;
  color: var(--gray-0);
`;

export const HeaderText = styled.main`
  font-size: var(--headline);
  color: var(--gray-1);
`;

export const MainText = styled.main`
  font-size: var(--title-2);
  color: var(--gray-0);
`;

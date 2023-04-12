import styled from 'styled-components';

export const Container = styled.div``;

export const CenterContainer = styled.div`
  margin: 0 auto;
  max-width: 780px;
  padding: 0 12px;
`;

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 780px) {
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
  gap: 21px;
`;

export const MainHeader = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 24px;

  button {
    border: none;
    background: var(--gray-3);
    color: var(--gray-0);
    border-radius: 4px;
    font-size: 22px;
    line-height: 10px;
    font-weight: 700;
    width: 40px;
    height: 40px;
    text-align: center;
    cursor: pointer;
  }
`;

export const Technologies = styled.div`
  padding: 22px;
  background: var(--gray-3);
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  gap: 16px;
  border-radius: 3px;

  > button {
    max-width: 50px;
  }

  @media (max-width: 780px) {
    padding: 22px 8.5px;
  }
`;

export const Header = styled.header`
  padding: 45px 0;
  border-top: 1px solid var(--gray-3);
  border-bottom: 1px solid var(--gray-3);
`;

export const Main = styled.main`
  padding: 18px 0;
`;

export const Title = styled.h2`
  font-size: 18px;
  font-weight: bold;
  color: var(--gray-0);
`;

export const MainTitle = styled.h2`
  width: 100%;
  font-size: 16px;
  font-weight: 600;
  color: var(--gray-0);
`;

export const HeaderText = styled.p`
  font-size: var(--headline);
  color: var(--gray-1);
`;

export const MainText = styled.p`
  font-size: var(--title-2);
  color: var(--gray-0);
`;

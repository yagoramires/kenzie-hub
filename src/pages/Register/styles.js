import styled from 'styled-components';

export const Container = styled.div`
  padding: 48px 12px 90px;
  min-height: 100vh;
  width: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Text = styled.p`
  font-size: var(--headline);
  color: var(--gray-1);
  text-align: center;
  margin-bottom: 18px;
`;

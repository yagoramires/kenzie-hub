import styled from 'styled-components';

export const Container = styled.div`
  padding: 12px;
  min-height: 100vh;
  width: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Redirect = styled.div`
  width: 100%;
`;
export const Text = styled.p`
  font-size: var(--headline);
  color: var(--gray-1);
  font-weight: 600;
  text-align: center;
  margin-bottom: 22px;
`;

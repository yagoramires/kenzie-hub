import styled from 'styled-components';

export const Container = styled.form`
  width: 100%;
  max-width: 370px;
  margin-top: 36px;
  background: var(--gray-3);
  border-radius: 4px;
  padding: 42px 22px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 24px;
`;

export const Title = styled.h2`
  font-size: 18px;
  color: var(--gray-0);
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

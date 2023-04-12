import styled from 'styled-components';

export const Container = styled.div`
  padding: 13px 22px;
  background: var(--gray-4);
  width: 100%;

  display: flex;
  justify-content: space-between;
  align-items: center;

  border-radius: 4px;

  cursor: pointer;

  h3 {
    color: var(--gray-0);
    font-size: 14px;
    font-weight: 700;
  }

  span {
    color: var(--gray-1);
    font-size: 12px;
  }

  :hover {
    background: var(--gray-2);

    span {
      color: var(--gray-0);
    }
  }

  @media (max-width: 780px) {
    padding: 12px;
  }
`;

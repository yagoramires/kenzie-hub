import styled, { css } from 'styled-components';

export const StyledButton = styled.button`
  color: var(--gray-0);
  font-size: var(--title-3);
  padding: 10px 22px;
  border-radius: 4px;
  border: none;
  cursor: pointer;
  transition: all 0.2s;
  width: 100%;
  text-align: center;

  background: ${({ color }) => {
    if (color === 'primary') {
      return css`
        var(--color-primary)
        `;
    } else if (color === 'gray-1') {
      return css`
        var(--gray-3) 
        `;
    }
  }};

  :hover {
    background: ${({ color }) => {
      if (color === 'primary') {
        return css`
       var(--color-primary-focus) 
       `;
      } else if (color === 'gray-1') {
        return css`
        var(--gray-1) 
    `;
      }
    }};
  }
`;

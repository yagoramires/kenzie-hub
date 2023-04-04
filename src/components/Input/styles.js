import styled from 'styled-components';

export const Fieldset = styled.fieldset`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  border: none;
`;
export const Label = styled.label`
  color: var(--gray-0);
  font-size: var(--headline);
`;

export const Error = styled.span`
  color: #868e96;
  font-size: 10px;
`;

export const FormInput = styled.input`
  width: 100%;
  background: var(--gray-2);
  border: none;
  border-radius: 4px;
  padding: 16px;
  color: var(--gray-0);
  margin: 16px 0 8px;

  ::placeholder {
    color: #868e96;
  }

  :focus::placeholder {
    color: var(--gray-0);
  }
`;

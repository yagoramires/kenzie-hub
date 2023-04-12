import styled from 'styled-components';

export const Container = styled.dialog`
  padding: 12px;
  top: 0;
  background: rgba(18, 18, 20, 0.5);
  position: absolute;
  width: 100%;
  min-height: 100vh;
  border: none;
`;

export const Modal = styled.div`
  width: 370px;
  overflow: hidden;

  margin: 200px auto 0;

  box-shadow: 0px 4px 40px -10px rgba(0, 0, 0, 0.25);
  border-radius: 4px;

  @media (max-width: 780px) {
    width: 100%;
    margin: 150px auto 0;
  }
`;

export const ModalHeader = styled.div`
  padding: 12px 20px 14px;
  width: 100%;
  background: var(--gray-2);

  display: flex;
  justify-content: space-between;
  align-items: center;

  h2 {
    font-weight: 700;
    font-size: 14px;
    color: var(--gray-0);
  }

  button {
    border: none;
    background: transparent;
    color: var(--gray-1);
    cursor: pointer;
  }
`;

export const ModalForm = styled.form`
  padding: 24px 20px 32px;
  width: 100%;
  background: var(--gray-3);

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 16px;
`;

export const FormSelect = styled.select`
  width: 100%;
  background: var(--gray-2);
  border: none;
  border-radius: 4px;
  padding: 16px;
  color: var(--gray-1);
  margin: 16px 0 8px;
  cursor: pointer;

  ::placeholder {
    color: #868e96;
  }

  :focus::placeholder {
    color: var(--gray-0);
  }
`;

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
  color: var(--gray-1);
  margin: 16px 0 8px;

  ::placeholder {
    color: #868e96;
  }

  :focus::placeholder {
    color: var(--gray-0);
  }
`;

export const ButtonsContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  gap: 22px;

  button:nth-of-type(1) {
    flex: 1;
    width: 100%;
  }

  button:nth-of-type(2) {
    color: var(--gray-0);
    font-size: var(--title-3);
    padding: 10px 22px;
    border-radius: 4px;
    border: none;
    cursor: pointer;
    transition: all 0.2s;
    text-align: center;

    background: var(--gray-1);
    :hover {
      background: var(--gray-2);
    }
  }
`;

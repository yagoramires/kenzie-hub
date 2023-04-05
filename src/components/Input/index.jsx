import React from 'react';
import { Fieldset, Label, FormInput, Error } from './styles';

const Input = ({ label, id, placeholder, type, register, error }) => {
  return (
    <Fieldset>
      {label ? <Label htmlFor={id}>{label}</Label> : null}
      <FormInput
        type={type}
        id={id}
        name={id}
        placeholder={placeholder}
        {...register(id)}
      />
      <Error>{error}</Error>
    </Fieldset>
  );
};

export default Input;

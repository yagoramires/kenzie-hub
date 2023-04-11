import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { TechsSchema } from './TechsSchema';
import Input from '../Input';
import Button from '../Button';
import { Container, Modal, ModalHeader, FormSelect, ModalForm } from './styles';
import { useContext } from 'react';
import { TechContext } from '../../context/TechContex';

const AddModal = ({ openModal, closeModal }) => {
  const { handleAddTech } = useContext(TechContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(TechsSchema),
  });

  return (
    <Container open={openModal}>
      <Modal>
        <ModalHeader>
          <h2>Cadastrar Tecnologia</h2>
          <button
            onClick={() => {
              closeModal(false);
            }}
          >
            X
          </button>
        </ModalHeader>
        <ModalForm onSubmit={handleSubmit(handleAddTech)}>
          <Input
            label={'Nome'}
            id={'name'}
            placeholder={'Digite o nome da tecnologia'}
            type={'text'}
            register={register}
            error={errors?.name?.message}
          />
          <FormSelect name='status' id='status' {...register('status')}>
            <option value='Iniciante'>Iniciante</option>
            <option value='Intermediário'>Intermediário</option>
            <option value='Terceiro módulo (Introdução ao Backend)'>
              Avançado
            </option>
          </FormSelect>

          <Button
            color={'primary'}
            text={'Cadastrar Tecnologia'}
            type={'submit'}
          />
        </ModalForm>
      </Modal>
    </Container>
  );
};

export default AddModal;

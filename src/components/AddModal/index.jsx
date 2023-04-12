import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { TechsSchema } from './TechsSchema';
import Input from '../Input';
import Button from '../Button';
import { Container, Modal, ModalHeader, FormSelect, ModalForm } from './styles';
import { useContext } from 'react';
import { TechContext } from '../../context/TechContex';

const AddModal = ({ openModal, setOpenModal }) => {
  const { addTechOnApi } = useContext(TechContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(TechsSchema),
  });

  const handleAddTech = (formData) => {
    addTechOnApi(formData);
    setOpenModal(false);
  };

  return (
    <Container open={openModal}>
      <Modal>
        <ModalHeader>
          <h2>Cadastrar Tecnologia</h2>
          <button
            onClick={() => {
              setOpenModal(false);
            }}
          >
            X
          </button>
        </ModalHeader>
        <ModalForm onSubmit={handleSubmit(handleAddTech)}>
          <Input
            label={'Nome'}
            id={'title'}
            placeholder={'Digite o nome da tecnologia'}
            type={'text'}
            register={register}
            error={errors?.title?.message}
          />
          <FormSelect name='status' id='status' {...register('status')}>
            <option value='Iniciante'>Iniciante</option>
            <option value='Intermediário'>Intermediário</option>
            <option value='Avançado'>Avançado</option>
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

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { TechsSchema } from './TechsSchema';
import Input from '../Input';
import Button from '../Button';
import {
  Container,
  Modal,
  ModalHeader,
  FormSelect,
  ModalForm,
  Label,
  Fieldset,
  FormInput,
  ButtonsContainer,
} from './styles';
import { useContext } from 'react';
import { TechContext } from '../../context/TechContex';
import { toast } from 'react-toastify';

const EditModal = ({ openModal, setOpenModal, tech }) => {
  const { updateTechStatus, deleteTech } = useContext(TechContext);

  const { register, handleSubmit } = useForm({
    resolver: zodResolver(TechsSchema),
  });

  const handleUpdateTech = (formData) => {
    if (formData.status === tech.status) {
      return toast.error('O status selecionado é o mesmo que o anterior.');
    }

    updateTechStatus(tech.id, formData);
    setOpenModal(false);
  };

  const handleDeleteTech = () => {
    deleteTech(tech.id);
    setOpenModal(false);
  };

  return (
    <Container open={openModal}>
      <Modal>
        <ModalHeader>
          <h2>Tecnologia Detalhes</h2>
          <button
            onClick={() => {
              setOpenModal(false);
            }}
          >
            X
          </button>
        </ModalHeader>
        <ModalForm onSubmit={handleSubmit(handleUpdateTech)}>
          <Fieldset>
            <Label>Nome</Label>
            <FormInput type='text' value={tech.title} disabled />
          </Fieldset>
          <Fieldset>
            <Label>Status</Label>
            <FormSelect name='status' id='status' {...register('status')}>
              <option value='Iniciante'>Iniciante</option>
              <option value='Intermediário'>Intermediário</option>
              <option value='Avançado'>Avançado</option>
            </FormSelect>
          </Fieldset>
          <ButtonsContainer>
            <Button
              color={'primary'}
              text={'Salvar alterações'}
              type={'submit'}
            />
            <button onClick={handleDeleteTech}>Excluir</button>
          </ButtonsContainer>
        </ModalForm>
      </Modal>
    </Container>
  );
};

export default EditModal;

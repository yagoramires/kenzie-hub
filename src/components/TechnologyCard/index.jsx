import React, { useState } from 'react';
import { Container } from './styles';
import EditModal from '../EditModal';

const TechnologyCard = ({ tech }) => {
  const [openModal, setOpenModal] = useState(false);

  return (
    <>
      <Container
        onClick={() => {
          setOpenModal(true);
        }}
      >
        <h3>{tech.title}</h3>
        <span>{tech.status}</span>
      </Container>
      <EditModal
        openModal={openModal}
        setOpenModal={setOpenModal}
        tech={tech}
      />
    </>
  );
};

export default TechnologyCard;

import React from 'react';
import Modal from 'react-modal';
import { IModalProps } from './interfaces';
import useModal from './useModal';

// import { Container } from './styles';

const ModalComponent: React.FC<IModalProps> = ({
  isOpen,
  closeModal,
  children,
}) => {
  const { customStyles } = useModal();

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={closeModal}
      style={customStyles}
      contentLabel="Imagem em Lightbox"
    >
      {children}
    </Modal>
  );
};

export default ModalComponent;

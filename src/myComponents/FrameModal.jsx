import React from 'react';
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';
import './FrameModal.css';

const FrameModal = ({ open, onClose }) => {
  return (
    <Modal
      open={open}
      onClose={onClose}
      center
      classNames={{
        overlay: 'custom-modal-overlay',
        modal: 'custom-modal-content',
        closeButton: 'custom-modal-close',
      }}
    >
      <p>Your form has been successfully submitted!</p>
      <p align="center">🤩 I'll contact you soon! 👋</p>
    </Modal>
  );
};

export default FrameModal;

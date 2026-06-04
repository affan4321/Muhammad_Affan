import React from 'react';
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';

const FrameModal = ({ open, onClose }) => {
  return (
    <Modal
      open={open}
      onClose={onClose}
      center
      classNames={{
        overlay: 'custom-overlay',
        modal: 'custom-modal',
      }}
    >
      <div className="container p-12 flex flex-col gap-4">
        <p className="text-lg font-semibold mb-2">Your form has been successfully submitted!</p>
        <p className="text-center">🤩 I'll contact you soon! 👋</p>
      </div>
      
    </Modal>
  );
};

export default FrameModal;

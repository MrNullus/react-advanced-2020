import React, { useEffect } from 'react';

const Modal = ({ modalContent, closeModal}) => {
  useEffect(() => {
    setTimeout(() => {
      closeModal();
    }, 3000); // close the modal after 3 seconds
  });

  return (
    <div classsName="modal">
      <p>{modalContent}</p>
    </div>
  );
};

export default Modal;

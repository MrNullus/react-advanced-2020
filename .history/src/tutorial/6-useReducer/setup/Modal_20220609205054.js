import React, { useEffect } from 'react';

const Modal = ({ modalContent }) => {
  return (
    <div classsName="modal">
      <p>{modalContent}</p>
    </div>
  );
};

export default Modal;

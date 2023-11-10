import styled from 'styled-components';
import ReactDOM from 'react-dom';
import React from 'react';

interface ModalProps {
  closeModal?: () => void;
  children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ closeModal, children }) => {
  console.log(children);
  return (
    <ModalStyle>
      {ReactDOM.createPortal(
        <BackdropStyle className="modal__backdrop" onClick={closeModal} />,
        document.getElementById('backdrop-root') as HTMLElement
      )}
      {ReactDOM.createPortal(
        // <div className="modal__overlay" onClick={closeModal} />,
        <OverlayContentStyle>{children}</OverlayContentStyle>,
        document.getElementById('overlay-root') as HTMLElement
      )}
    </ModalStyle>
  );
};

export default Modal;

const ModalStyle = styled.div`
`;

const BackdropStyle = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  z-index: 10;
  background: rgba(0, 0, 0, 0.75);
`;

const OverlayContentStyle = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: #fff;
  padding: 20px;
  z-index: 11;
`;

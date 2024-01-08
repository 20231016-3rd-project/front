import styled from 'styled-components';
import ReactDOM from 'react-dom';
import React, { useEffect } from 'react';

interface ModalProps {
  closeModal?: () => void;
  children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ closeModal, children }) => {
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && closeModal) {
        closeModal();
      }
    };

    // Attach the event listener
    window.addEventListener('keydown', handleKeyDown);

    // Detach the event listener when the component is unmounted
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [closeModal]);
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

const ModalStyle = styled.div``;

const BackdropStyle = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  z-index: 10;
  background: rgba(0, 0, 0, 0.5);
`;

const OverlayContentStyle = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: #fff;
  padding: 20px;
  z-index: 11;
  border-radius: 0.5rem;
  transition: all 0.3s ease-in-out;
  opacity: 1;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.25);
`;

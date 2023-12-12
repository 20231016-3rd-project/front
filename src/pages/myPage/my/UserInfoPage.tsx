import styled from 'styled-components';

const UserInfoPage = ({ isVisible, onClose }) => {
  if (!isVisible) return null;

  return (
    <ModalOverlay>
    <ModalContent>
      <CloseButton onClick={onClose}>X</CloseButton>
      <div>내정보수정</div>
    </ModalContent>
  </ModalOverlay>
  );
};

export default UserInfoPage;

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 100;
`;

const ModalContent = styled.div`
   background-color: white;
  width: 30%;
  height: 60%;
  padding: 20px;
  border-radius: 20px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.25);

  div{
    color: ;
    margin-top: 20px;
    text-align: center;
    font-size: 1.6rem;
    font-weight: bold;
  }
`;

const CloseButton = styled.div`
  float: right;
`;
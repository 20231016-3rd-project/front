import subtract from "../../../assets/images/Group 68.png"
import settingicon from "../../../assets/images/Group 67.png"
import styled , { keyframes } from 'styled-components'


const AdminChatPage = () => {
  return (
    <Main>
        <Img1 src={settingicon} alt="" />
        <Img2 src={subtract} alt="" />
        <Message>현재 페이지는 준비중입니다.</Message>
    </Main>
  )
}

export default AdminChatPage

const Main = styled.div`
  width: 100%;
  height: 100%;
  border: 1px solid #e0e0e0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
`;

const rotateAnimation = keyframes`
  from {
    transform: translate(-50%, -50%) rotate(0deg);
  }
  to {
    transform: translate(-50%, -50%) rotate(360deg);
  }
`;

const Img1 = styled.img`
  position: absolute;
  top: 39%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 6;
  animation: ${rotateAnimation} 10s linear infinite;
`;

const Img2 = styled.img` 

position: absolute;
top: 40%;
left: 50%;
z-index: 5;
transform: translate(-50%, -50%);
  
`;

const Message = styled.p`
  position: absolute;
  top: 70%; // 위치를 조정하여 이미지 아래에 오도록 설정
  text-align: center;
  font-weight: bold;
  font-size: 2rem; // 글자 크기 조정
  color: #000; // 글자 색상 설정
`;



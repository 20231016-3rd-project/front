import styled from 'styled-components';

export const MainContainer = styled.div`
  width: 100vw;
  height: 100vh;
  overflow: hidden; // 스크롤 방지
`;

export const GridContainer = styled.div`
  display: grid;
  grid-template-columns: 1.65fr 1fr; // 50% 50% 레이아웃
  height: 100%;
`;

export const VideoSection = styled.div`
 overflow: hidden; // 비디오가 컨테이너 바깥으로 나가는 것을 방지
 position: relative;
 width: 100%;
 height: 100%;
video {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

h1{
  z-index: 100;
}
`;

export const OverlayText = styled.div`
  position: absolute;
  top: 50%; 
  left: 50%; 
  transform: translate(-50%, -50%); 
  color: white; 
  font-size: 30px; 
  font-weight: bold;
  text-align: center; 
`;

export const LoginSection = styled.div`
   width: 100%;
   height: 100%;
   display: flex;
   justify-content: center;
   align-items: center;
`;

export const Box = styled.div`
   display: flex;
   flex-direction: column;
   width: 75%;
   height: 70%;


   h1{
    font-size: 28px;
    margin-bottom: 40px;
    font-weight: bold;
  }
  a{

    img{
    margin-top: 20px;
    width: 100%;
  }

  }
 
  label{
    margin-top: 20px;
    font-size: 14px;
  }

`;

export const Input = styled.input`
  margin: 10px 0px;
  margin-bottom: 10px;
  padding: 10px 0px; // 상하 패딩을 조정합니다.
  width: 100%;
  border: 1px solid #ccc;
  background-color: transparent; // 배경색을 투명하게 설정합니다.
  outline: none; // 포커스 시 테두리를 제거합니다.

  &:focus {
    border-bottom: 2px solid #007bff; // 포커스 시 밑줄의 색상과 두께를 변경합니다.
  }

`;

export const AutoLoginBox = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
  font-size: 0.8rem;
`;

export const CheckboxLabel = styled.div`
 margin-top: 1.5px;
 display: flex;
`;

export const Checkbox = styled.input.attrs({ type: 'checkbox' })`
  margin-right: 5px;
  cursor: pointer;
`;

export const PasswordRecoveryLink = styled.p`
  color: black; 
  text-decoration: none; 
  cursor: pointer;
`;



export const Button = styled.button`
padding: 10px 20px;
  background-color: #f9b916;
  border : none ;
  margin-top: 50px;
  width: 100%; 
  height: 7%;
  margin-bottom: 50px;
`;

export const KakaoButton = styled.div`
   border: 1px solid red;
   width: 100%;
   height: 70%;
   img{
    width: 10px;
    height: 10px;
   }
`;

export const GoogleButton = styled.div`
   border: 1px solid red;
   width: 100%;
   height: 70%;

`;

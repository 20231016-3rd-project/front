import styled from 'styled-components';

export const MainContainer = styled.div`
  height: 100vh;
  width: 100%;
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

/* 오른쪽 로그인 부분 */

export const SignupForm = styled.form`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  

`;

export const FieldContainer = styled.div`
 display: flex;
 flex-direction: column;
 width: 75%;
 height: 70%;


 h1{
    font-size: 28px;
    margin-bottom: 20px;
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
  width: 75%;
  border: 1px solid #ccc;
  background-color: transparent; // 배경색을 투명하게 설정합니다.
  outline: none; // 포커스 시 테두리를 제거합니다.
  margin-right: 10px;

  &:focus {
    border-bottom: 2px solid #007bff; // 포커스 시 밑줄의 색상과 두께를 변경합니다.
  }

`;

export const InputField = styled.div`
   width: 100%;
`;

export const InputPassword = styled.input`

  margin: 10px 0px;
  margin-bottom: 10px;
  padding: 10px 0px; // 상하 패딩을 조정합니다.
  width: 100%;
  border: 1px solid #ccc;
  background-color: transparent; // 배경색을 투명하게 설정합니다.
  outline: none; // 포커스 시 테두리를 제거합니다.
  margin-right: 10px;

  &:focus {
    border-bottom: 2px solid #007bff; // 포커스 시 밑줄의 색상과 두께를 변경합니다.
  }

`;

export const Button = styled.button`
  width: 110px;
  height: auto;
  padding: 10px;
  border: 1000px solid #FCD53F;
  background-color: #FCD53F;
  color: white;
  border: none;
  cursor: pointer;
  &:hover {
    background-color: #0056b3;
  }
`;

// 중복 확인 버튼 스타일을 위한 새로운 컴포넌트
export const CheckButton = styled(Button)`
`;

export const ErrorMsg = styled.span`
  color: #6D4534;
`;


export const Label = styled.label`
  display: block;
  margin-bottom: 15px;
  color: #333;
  font-size: 0.9em;
`;

export const InputButtonContainer = styled.div`
  align-items: center;
  margin-bottom: 10px;
`;

export const PhoneFieldContainer = styled(FieldContainer)`
`;

export const PhoneInputContainer = styled.div`
 
`;

export const PhoneInputField = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const PhoneInput = styled.input`
  width: 33%;
  border: 1px solid blue;
  padding: 10px 0px; // 상하 패딩을 조정합니다.
  margin-top: 5px; // 레이블과의 간격을 조정
  border: 1px solid #ccc;
  margin: 0;
  text-align: center;
  &:not(:last-child) {
  margin-right: 10px; // 마지막 요소를 제외하고 오른쪽 마진 추가
  }
`;


export const SignUpButton = styled(Button)`
  width: 100%; // 버튼의 너비를 100%로 설정
  padding: 10px 0; // 상하 패딩을 10px로, 좌우 패딩을 0으로 설정
  margin-top: 30px;
`;
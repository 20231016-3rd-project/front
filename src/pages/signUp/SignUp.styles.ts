import styled from 'styled-components';

export const Container = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

export const SignupForm = styled.form`
  width: 25%;
  height: 55%;
  border: 1px solid red;
  

`;

export const FieldContainer = styled.div`
 display: flex;
 flex-direction: column;
 padding: 15px;
`;

export const InputField = styled.div`
  display: flex;
  align-items: center;
  border-bottom: 1px solid #ccc;
  margin: 0;
  padding: 0;
  margin-bottom: 20px;
  
`;

export const Input = styled.input`
  border: 1px solid blue;
  width: 75%;
  padding: 10px;
  margin-top: 5px; // 레이블과의 간격을 조정
  border: none;
  border-radius: 0;
  outline: none;
  margin: 0;
  padding: 0;

`;

export const Button = styled.button`
  width: 110px;
  padding: 10px;
  background-color: #FCD53F;
  color: white;
  border: none;
  border-radius: 4px;
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
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const PhoneInputField = styled.div`

`;

export const PhoneInput = styled.input`
  border: 1px solid blue;
  padding: 10px;
  margin-top: 5px; // 레이블과의 간격을 조정
  border: none;
  border-bottom: 1px solid #ccc;
  outline: none;
  margin: 0;
  padding: 0;
  width: calc(33% - 6px); // 3개의 입력 필드가 동일한 간격을 유지하도록 조정
  text-align: center;
  &:not(:last-child) {
  margin-right: 10px; // 마지막 요소를 제외하고 오른쪽 마진 추가
  }
`;


export const SignUpButton = styled(Button)`
  width: 100%; // 버튼의 너비를 100%로 설정
  margin-top: 50px; // 상단 마진 유지
  border-radius: 20px; // 끝을 둥글게 유지
  // 필요하다면 패딩을 조정하여 버튼의 높이를 입력 필드와 동일하게 맞춤
  padding: 10px 0; // 상하 패딩을 10px로, 좌우 패딩을 0으로 설정
`;
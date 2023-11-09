import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100%;
  max-width: 400px;
  margin: 0 auto;
  padding: 20px;
  margin-top: -160px; // 폼을 위로 50px만큼 올립니다.
`;

export const Input = styled.input`
  width: 100%; // 버튼을 제외하고 입력 필드를 전체 너비로 설정
  padding: 10px;
  margin-top: 5px; // 레이블과의 간격을 조정
  border: none;
  border-bottom: 1px solid #ccc;
  border-radius: 0;
`;

export const Button = styled.button`
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

export const FieldContainer = styled.div`
  display: flex;
  flex-direction: column; // 항목들을 수직으로 쌓음
  margin-bottom: 10px;
  align-items: flex-start; // 항목들을 컨테이너의 시작 부분에 정렬
`;

export const ErrorMsg = styled.span`
  color: #6D4534;
`;


export const Label = styled.label`
  display: block;
  margin-bottom: 5px;
  color: #333;
  font-size: 0.9em;
`;

export const InputButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
`;

export const InputField = styled.div`
  flex-grow: 1;
  margin-right: 10px; // 버튼과의 간격
`;

export const PhoneFieldContainer = styled(FieldContainer)`
  margin-top: 20px; // 기존 마진보다 더 큰 값을 설정
`;

export const PhoneInputContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 300px; // 폼의 최대 너비를 설정하여 회원가입 폼에서 벗어나지 않도록 함
`;

export const PhoneInput = styled(Input)`
  width: calc(33% - 6px); // 3개의 입력 필드가 동일한 간격을 유지하도록 조정
  text-align: center;
  margin: 0; // 기본 마진 제거
  &:not(:last-child) {
  margin-right: 10px; // 마지막 요소를 제외하고 오른쪽 마진 추가
  }
`;


export const SignUpButton = styled(Button)`
  width: 100%; // 버튼의 너비를 100%로 설정
  margin-top: 20px; // 상단 마진 유지
  border-radius: 20px; // 끝을 둥글게 유지
  // 필요하다면 패딩을 조정하여 버튼의 높이를 입력 필드와 동일하게 맞춤
  padding: 10px 0; // 상하 패딩을 10px로, 좌우 패딩을 0으로 설정
`;

// 중복 확인 버튼 스타일을 위한 새로운 컴포넌트
export const CheckButton = styled(Button)`
  // 중복 확인 버튼에 특화된 스타일
  padding: 8px 20px; // 패딩 조정
  margin: 0; // 마진 제거
  border-radius: 4px; // 덜 둥근 모서리
`;
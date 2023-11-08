import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100%;
  max-width: 250px;
  margin: 0 auto;
  padding: 20px;
`;

export const Input = styled.input`
  margin: 10px 0;
  padding: 10px 0; // 상하 패딩을 조정합니다.
  width: 100%;
  max-width: 300px;
  border: none; // 테두리를 제거합니다.
  border-bottom: 1px solid #ccc; // 밑줄만 추가합니다.
  background-color: transparent; // 배경색을 투명하게 설정합니다.
  outline: none; // 포커스 시 테두리를 제거합니다.

  &:focus {
    border-bottom: 2px solid #007bff; // 포커스 시 밑줄의 색상과 두께를 변경합니다.
  }
`;

export const Button = styled.button`
  padding: 10px 20px;
  baground-color: #FCD53F;
  margin-top: 10px;
  width: 100%; // 버튼의 너비를 입력 필드와 동일하게 100%로 설정합니다.
  max-width: 300px; // 버튼의 최대 너비를 입력 필드와 동일하게 300px로 설정합니다.
`;

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
  padding: 10px 0;
  width: 100%;
  max-width: 300px;
  border: none; 
  border-bottom: 1px solid #ccc; 
  background-color: transparent;
  outline: none; 

  &:focus {
    border-bottom: 2px solid #007bff; 
  }
`;

export const Button = styled.button`
  padding: 10px 20px;
  baground-color: #FCD53F;
  margin-top: 10px;
  width: 100%; 
  max-width: 300px; // 버튼의 최대 너비를 입력 필드와 동일하게 300px로 설정합니다.
`;

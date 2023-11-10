import styled from 'styled-components';

export const Box = styled.div`
   align-items: center;
   display: flex;
   flex-direction: column;
   justify-content: center;
`;

export const Container = styled.div`
  display: flex;
  height: 700px;
  width: 100%;
  max-width: 250px;
  margin: 0 auto;
  padding: 20px;

  h1{
    font-size: 2rem;
    margin-bottom: 40px;
    font-weight: bold;
  }

  img{
    margin-top: 10px;
    width: 100%;
  }

  label{
    margin-top: 20px;
    align-self: flex-start 
  }
`;

export const Input = styled.input`
  margin: 10px 0px;
  margin-bottom: 30px;
  padding: 10px 0px; // 상하 패딩을 조정합니다.
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
  background-color: #f9b916;
  border : none ;
  margin-top: 10px;
  width: 100%; // 버튼의 너비를 입력 필드와 동일하게 100%로 설정합니다.
  max-width: 300px; // 버튼의 최대 너비를 입력 필드와 동일하게 300px로 설정합니다.
  margin-bottom: 50px;
`;

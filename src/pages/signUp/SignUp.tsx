import React from 'react';
import styled from 'styled-components';

const SignUp: React.FC = () => {
  return (
    <Container>
      <StyledForm>
        {/* 회원가입 제목을 StyledForm 내부의 맨 상단에 추가 */}
        <Title>회원가입</Title>

        <Label>닉네임 설정</Label>
        <InputWrapper>
          <Input placeholder="ex. 먹토리" />
          <InnerButton>중복확인</InnerButton>
        </InputWrapper>

        <Label>이메일</Label>
        <InputWrapper>
          <Input type="email" placeholder="ex. suj2n.k@gmail.com" />
          <InnerButton>중복확인</InnerButton>
        </InputWrapper>

        <Label>비밀번호</Label>
        <Input type="password" placeholder="비밀번호" />

        <Label>Confirm Password</Label>
        <Input type="password" placeholder="비밀번호 확인" />

        <Label>전화번호</Label>
        <PhoneNumberWrapper>
          <Input placeholder="XXX" />
          <Input placeholder="XXXX" />
          <Input placeholder="XXXX" />
        </PhoneNumberWrapper>

        <Label>자기소개</Label>
        <TextArea placeholder="" />

        <Button>Register</Button>
      </StyledForm>
    </Container>
  );
};

const Title = styled.h1`
  font-size: 24px;
  font-weight: 900;
  text-align: center;
  margin-bottom: 120px; // 제목 아래에 간격 추가
`;
const Container = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 10vh; // 화면 높이의 10%만큼 상단에 패딩 추가
  height: 100vh;
`;

const StyledForm = styled.div`
  width: 400px;
  display: flex;
  flex-direction: column;
  padding: 20px;
`;

const Label = styled.label`
  margin-bottom: 2px;
  font-weight: bold;
`;

const InputWrapper = styled.div`
  position: relative;
  margin-bottom: 20px; // 각 입력칸의 위아래로 패딩 추가
`;

const PhoneNumberWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 10px 0;
  margin-bottom: 10px;
`;

const Input = styled.input`
  width: 100%;
  padding: 10px 0;
  border: none;
  border-bottom: 1px solid #ccc; // 밑줄만 보이게 수정
  background-color: transparent;
  margin-bottom: 20px; // 각 입력칸의 아래로 패딩 추가
`;

const TextArea = styled.textarea`
  width: 100%;
  padding: px 0;
  border: none;
  border-bottom: 1px solid #ccc; // 밑줄만 보이게 수정
  background-color: transparent;
  margin-bottom: 20px; // 각 입력칸의 아래로 패딩 추가
`;

const Button = styled.button`
  background-color: orange;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

const InnerButton = styled.button`
  position: absolute;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
  background-color: orange;
  color: white;
  padding: 5px 10px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

export default SignUp;
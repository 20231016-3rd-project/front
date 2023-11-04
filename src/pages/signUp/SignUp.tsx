import React, { useState } from 'react';
import {
  signUp,
  checkEmailDuplication,
  checkNicknameDuplication,
} from '../../services/AuthService';

import {
  Container,
  Form,
  InputContainer,
  Label,
  Input,
  Button,
} from './SignUp.styles';

const SignUp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [nickname, setNickname] = useState('');
  const [phone, setPhone] = useState('');

  const handleSignUp = async (event: React.FormEvent) => {
    event.preventDefault();

    const passwordReg = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,15}$/;
    if (!passwordReg.test(password)) {
      alert('비밀번호는 숫자, 대소문자를 포함한 8~15자로 설정해주세요.');
      return;
    }

    try {
      const signUpResult = await signUp(email, password, nickname, phone);
      if (signUpResult.message === '회원가입 완료') {
        alert('회원가입이 완료되었습니다.');
      } else {
        console.error('Unexpected response:', signUpResult);
        alert('회원가입 중 오류가 발생했습니다. 다시 시도해주세요.');
      }
    } catch (error) {
      console.error(error);
      alert('회원가입 요청 중 오류가 발생했습니다. 다시 시도해주세요.');
    }
  };

  const handleCheckEmailDuplication = async () => {
    try {
      const result = await checkEmailDuplication(email);
      if (result) {
        alert('사용 가능한 이메일입니다.');
      } else {
        alert('이미 사용 중인 이메일입니다.');
      }
    } catch (error) {
      console.error(error);
      alert('이메일 중복 확인 요청 중 오류가 발생했습니다. 다시 시도해주세요.');
    }
  };

  const handleCheckNicknameDuplication = async () => {
    try {
      const result = await checkNicknameDuplication(nickname);
      if (result) {
        alert('사용 가능한 닉네임입니다.');
      } else {
        alert('이미 사용 중인 닉네임입니다.');
      }
    } catch (error) {
      console.error(error);
      alert('닉네임 중복 확인 요청 중 오류가 발생했습니다. 다시 시도해주세요.');
    }
  };

  return (
    <Container>
      <Form onSubmit={handleSignUp}>
        <InputContainer>
          <Label>Email</Label>
          <Input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Button onClick={handleCheckEmailDuplication}>
            Check Duplication
          </Button>
        </InputContainer>

        <InputContainer>
          <Label>Password</Label>
          <Input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </InputContainer>

        <InputContainer>
          <Label>Nickname</Label>
          <Input
            type="text"
            value={nickname}
            onChange={(e) => setNickname(e.target.value)}
          />
          <Button onClick={handleCheckNicknameDuplication}>
            Check Duplication
          </Button>
        </InputContainer>

        <InputContainer>
          <Label>Phone</Label>
          <Input
            type="text"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
        </InputContainer>

        <Button type="submit">Sign Up</Button>
      </Form>
    </Container>
  );
};

export default SignUp;

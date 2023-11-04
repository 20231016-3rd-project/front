import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import * as S from './SignIn.styles';

const SignIn = () => {
  const [email, setEmail] = useState('user1@naver.com');
  const [password, setPassword] = useState('user1234');
  const [emailAdmin, setEmailAdmin] = useState('admin@test.com');
  const [passwordAdmin, setPasswordAdmin] = useState('administrator');
  const navigate = useNavigate();

  const handleLogin = async (email: string, password: string) => {
    try {
      const response = await axios
        .post(
          `${import.meta.env.VITE_APP_SERVER_API}/sunflowerPlate/user/login`,
          {
            email,
            password,
          }
        )
        .then((r) => {
          console.log(r);
          const { accessToken } = r.data;
          localStorage.setItem('accessToken', accessToken);
        });

      // Here you would usually store the tokens in some kind of storage (like localStorage)
      // localStorage.setItem('accessToken', AccessToken);
      // localStorage.setItem('refreshToken', refreshToken);

      navigate('/'); // Redirect to home page after successful login
    } catch (err) {
      // Error handling
      console.error('Error during login', err);
    }
  };

  return (
    <S.Container>
      유저 로그인입니다.
      <S.Input
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
        type="email"
      />
      <S.Input
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
        type="password"
      />
      <S.Button onClick={() => handleLogin(email, password)}>Login</S.Button>
      관리자 로그인입니다.
      <S.Input
        value={emailAdmin}
        onChange={(e) => setEmailAdmin(e.target.value)}
        placeholder="Email"
        type="email"
      />
      <S.Input
        value={passwordAdmin}
        onChange={(e) => setPasswordAdmin(e.target.value)}
        placeholder="Password"
        type="password"
      />
      <S.Button onClick={() => handleLogin(emailAdmin, passwordAdmin)}>
        Login
      </S.Button>
    </S.Container>
  );
};

export default SignIn;

import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import * as S from './SignIn.styles';
import { KAKAO_AUTH_URI } from '../../apis/kakaoAuthApi/kakaoAuthApi';
import { handleKakaoLogin } from '../../apis/kakaoAuthApi/kakaoAuthApi';
import { login } from '../../apis/authApi/authApi'; 
import kakaoLogo from '../../assets/images/kakaoLogo.png';

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (email: string, password: string) => {
    try {
      await login({ email, password });
      navigate('/'); // Redirect to home page after successful login
    } catch (err) {
      // Improved error handling
      console.error('Error during login', err);
      // Display an error message to the user here
    }
  };

  const handleKakaoRedirect = async () => {
    const urlParams = new URLSearchParams(window.location.search);
    const code = urlParams.get('code');
  
    if (code) {
      try {
        await handleKakaoLogin(code);
        navigate('/'); 
      } catch (err) {
        console.error('Error during Kakao login', err);
      }
    }
  };
   useEffect(() => {
    handleKakaoRedirect();
  }, []);

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
      
      
      <a href={KAKAO_AUTH_URI}>
        <img src={kakaoLogo} alt="카카오 로그인" />
      </a>
      
    </S.Container>
  );
};

export default SignIn;

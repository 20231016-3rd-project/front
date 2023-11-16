import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import * as S from './SignIn.styles';
import { KAKAO_AUTH_URI } from '../../apis/kakaoAuthApi/kakaoAuthApi';
import { handleKakaoLogin } from '../../apis/kakaoAuthApi/kakaoAuthApi';
import kakaoLogo from '../../assets/images/Kakao Login3.png';
import googleLogo from "../../assets/images/Google Login.png"
import prame from "../../assets/images/Frame 3933.png"
import axios from 'axios';



const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (email: string, password: string) => {
    try {
      // await login({ email, password });
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
          localStorage.setItem('nickName', r.data.memberNickName);
          localStorage.setItem('accessToken', accessToken);
        });

      // Here you would usually store the tokens in some kind of storage (like localStorage)
      // localStorage.setItem('accessToken', AccessToken);
      // localStorage.setItem('refreshToken', refreshToken);

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
      <S.Box>
      <h1>Login</h1>
      <label htmlFor="email">이메일</label>
      <S.Input
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="이메일을 입력해주세요"
        type="email"
      />

      <label htmlFor="email">패스워드</label>

      <S.Input
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="패스워드를 입력해주세요"
        type="password"
      />
      <S.Button onClick={() => handleLogin(email, password)}> Login </S.Button>

      <img src={prame} alt="----" />

      <a href={KAKAO_AUTH_URI}>
        <img src={kakaoLogo} alt="카카오 로그인" />
      </a>

      <a href={KAKAO_AUTH_URI}>
        <img src={googleLogo} alt="카카오 로그인" />
      </a>
      </S.Box>
    </S.Container>
  );
};

export default SignIn;

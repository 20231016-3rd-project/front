import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import * as S from './SignIn.styles';

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const response = await axios.post('/sunflowerPlate/user/login', {
        email,
        password,
      });

      const { AccessToken, refreshToken } = response.data;

      // Here you would usually store the tokens in some kind of storage (like localStorage)
      localStorage.setItem('accessToken', AccessToken);
      localStorage.setItem('refreshToken', refreshToken);

      navigate('/'); // Redirect to home page after successful login
    } catch (err) {
      // Error handling
      console.error('Error during login', err);
    }
  };

  return (
    <S.Container>
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
      <S.Button onClick={handleLogin}>Login</S.Button>
    </S.Container>
  );
};

export default SignIn;

import React, { useState } from 'react';
import { checkEmailDuplicate, checkNickNameDuplicate, signUpApi } from '../../apis/signupApi/signupApi';

interface SignUpData {
  email: string;
  password: string;
  nickName: string;
  phone: string;
}

const SignUp: React.FC = () => {
  const [userData, setUserData] = useState<SignUpData>({ email: '', password: '', nickName: '', phone: '' });
  const [error, setError] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      // 이메일 중복 확인
      const emailCheck = await checkEmailDuplicate(userData.email);
      console.log('Email check response:', emailCheck); // 반환값 로깅
      if (!emailCheck) {  // `.data` 제거
        throw new Error('Email is already in use');
      }

      // 닉네임 중복 확인
      const nickNameCheck = await checkNickNameDuplicate(userData.nickName);
      if (!nickNameCheck) {  // `.data` 제거
        throw new Error('NickName is already in use');
      }

      // 회원가입 요청
      await signUpApi(userData);

      // 회원가입 성공 로직
    } catch (error) {
      console.error('Error during signup process', error);
      setError(error instanceof Error ? error.message : 'An error occurred');
    }
  };



    return (
      <div>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" placeholder="Email" onChange={handleChange} value={userData.email} />
          </div>
          <div>
            <label htmlFor="password">Password:</label>
            <input type="password" id="password" name="password" placeholder="Password" onChange={handleChange} value={userData.password} />
          </div>
          <div>
            <label htmlFor="nickName">NickName:</label>
            <input type="text" id="nickName" name="nickName" placeholder="NickName" onChange={handleChange} value={userData.nickName} />
          </div>
          <div>
            <label htmlFor="phone">Phone:</label>
            <input type="text" id="phone" name="phone" placeholder="Phone" onChange={handleChange} value={userData.phone} />
          </div>
          <button type="submit">Sign Up</button>
        </form>
        {error && <p>{error}</p>}
      </div>
    );
  };
  
  export default SignUp;
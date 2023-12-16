import React, { useState } from 'react';
import { checkEmailDuplicate, checkNickNameDuplicate, signUpApi } from '../../apis/signupApi/signupApi';
import Video from "../../assets/images/yellowflower.mp4"
import * as SU from './SignUp.styles';
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
      <SU.MainContainer>
      <SU.GridContainer>
     <SU.VideoSection>
              <video autoPlay loop muted>
                 <source src={Video} type="video/mp4" />
              </video>

              <SU.OverlayText>
              <h1>지금바로 떠나는 맛집 탐방!</h1>
               <p>해바라기 플레이트</p>
              </SU.OverlayText>
     </SU.VideoSection>
     <SU.SignupForm onSubmit={handleSubmit}>
     <SU.FieldContainer>
     <h1>회원가입</h1>
        <label htmlFor="email">이메일</label>
        <SU.InputField>
          <SU.Input
             type="email"
             id="email" 
             name="email" 
             placeholder="Email" 
             onChange={handleChange} 
             value={userData.email} />
          {/* <SU.CheckButton type="button" onClick={handleCheckEmail}>중복 확인</SU.CheckButton> */}
          </SU.InputField>
          {/* {emailDuplicateCheck && errors.email && <SU.ErrorMsg>{errors.email}</SU.ErrorMsg>} */}
      
          <label htmlFor="nickname">닉네임</label>
          <SU.InputField>
          <SU.Input 
          type="text" 
          id="nickName" 
          name="nickName" 
          placeholder="NickName" 
          onChange={handleChange} 
          value={userData.nickName} 
        />
          {/* <SU.CheckButton type="button" onClick={handleCheckNickname}>중복 확인</SU.CheckButton> */}
        </SU.InputField>
        <label htmlFor="password">비밀번호</label>  
        <SU.InputPassword 
        type="password" 
        id="password" 
        name="password" 
        placeholder="Password" 
        onChange={handleChange} 
        value={userData.password} />
   {/* {errors.password && <p className="error">{errors.password}</p>} */}
   {/* <SU.InputPassword
    type="password"
    value={confirmPassword}
    onChange={handleConfirmPasswordChange}
    placeholder="비밀번호를 다시 입력해주세요"
    autoComplete="new-password"
  />
  {errors.confirmPassword && <p className="error">{errors.confirmPassword}</p>} */}
        
        <SU.Label htmlFor="phone">핸드폰 번호</SU.Label>
        <SU.PhoneInputField>
        <SU.PhoneInput type="text" 
        id="phone" 
        name="phone" 
        placeholder="Phone" 
        onChange={handleChange} 
        value={userData.phone} />
        </SU.PhoneInputField>
            
         
        <SU.SignUpButton type="submit">가입하기</SU.SignUpButton>
        </SU.FieldContainer>
        </SU.SignupForm>
        {error && <p>{error}</p>}
        </SU.GridContainer>
        </SU.MainContainer>
    );
  };
  
  export default SignUp;
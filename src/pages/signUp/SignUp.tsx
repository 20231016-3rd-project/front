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
  const [phone, setPhone] = useState({ phone1: '', phone2: '', phone3: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  // 이메일 중복 확인
  const handleEmailDuplicateCheck = async () => {
    if (!userData.email) {
      alert('이메일을 입력해주세요.');
      return;
    }
    try {
      const isEmailAvailable = await checkEmailDuplicate(userData.email);
      if (!isEmailAvailable) {
        alert('이미 사용 중인 이메일입니다.');
      } else {
        alert('사용 가능한 이메일입니다.');
      }
    } catch (error) {
      console.error('이메일 중복 확인 중 오류 발생', error);
    }
  };

  // 닉네임 중복 확인
  const handleNickNameDuplicateCheck = async () => {
    if (!userData.nickName) {
      alert('닉네임을 입력해주세요.');
      return;
    }
    try {
      const isNickNameAvailable = await checkNickNameDuplicate(userData.nickName);
      if (!isNickNameAvailable) {
        alert('이미 사용 중인 닉네임입니다.');
      } else {
        alert('사용 가능한 닉네임입니다.');
      }
    } catch (error) {
      console.error('닉네임 중복 확인 중 오류 발생', error);
    }
  };

  const handleChangePhone = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setPhone({ ...phone, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      // 핸드폰 번호 합치기
      const fullPhoneNumber = `${phone.phone1}-${phone.phone2}-${phone.phone3}`;

      
      const completeUserData = { ...userData, phone: fullPhoneNumber };

      
      await signUpApi(completeUserData);

      // 회원가입 성공 로직
      alert('회원가입이 완료되었습니다.');

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
                placeholder="이메일을 입력해주세요" 
                onChange={handleChange} 
                value={userData.email} 
              />
              <SU.CheckButton type="button" onClick={handleEmailDuplicateCheck}>중복 확인</SU.CheckButton>
            </SU.InputField>
            {/* {emailDuplicateCheck && errors.email && <SU.ErrorMsg>{errors.email}</SU.ErrorMsg>} */}
            
            <label htmlFor="nickname">닉네임</label>
            <SU.InputField>
              <SU.Input 
                type="text" 
                id="nickName" 
                name="nickName" 
                placeholder="닉네임을 입력해주세요" 
                onChange={handleChange} 
                value={userData.nickName} 
              />
              <SU.CheckButton type="button" onClick={handleNickNameDuplicateCheck}>중복 확인</SU.CheckButton>
            </SU.InputField>

            <label htmlFor="password">비밀번호</label>  
            <SU.InputPassword 
              type="password" 
              id="password" 
              name="password" 
              placeholder="비밀번호를 입력해주세요" 
              onChange={handleChange} 
              value={userData.password} 
            />
            {/* {errors.password && <p className="error">{errors.password}</p>}  */}
            <SU.InputPassword
              type="password"
              placeholder="비밀번호를 다시 입력해주세요"
              autoComplete="new-password"
            />
            {/* {errors.confirmPassword && <p className="error">{errors.confirmPassword}</p>} */}
            
            <SU.Label htmlFor="phone">핸드폰 번호</SU.Label>
            <SU.PhoneInputField>
              <SU.PhoneInput 
                type="text" 
                name="phone1" 
                placeholder="010" 
                onChange={handleChangePhone} 
                value={phone.phone1} 
              />
              <SU.PhoneInput 
                type="text" 
                name="phone2" 
                placeholder="0000" 
                onChange={handleChangePhone} 
                value={phone.phone2} 
              />
              <SU.PhoneInput 
                type="text" 
                name="phone3" 
                placeholder="0000" 
                onChange={handleChangePhone} 
                value={phone.phone3} 
              />
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
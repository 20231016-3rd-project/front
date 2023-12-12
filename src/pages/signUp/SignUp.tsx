import React, { useState } from 'react';
import { checkEmailDuplication, checkNicknameDuplication } from '../../apis/userApi/userApi';
import Video from "../../assets/images/yellowflower.mp4"
import * as SU from './SignUp.styles';
import { useNavigate } from 'react-router-dom';
import { submitSignup } from '../../store/slices/signupSlice';

interface PhoneState {
  part1: string;
  part2: string;
  part3: string;
}

const SignUp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [nickname, setNickname] = useState('');
  const [phone, setPhone] = useState<PhoneState>({ part1: '', part2: '', part3: '' });
  const [errors, setErrors] = useState({
    email: '',
    password: '',
    confirmPassword: '',
    nickname: '',
    phone: '',
  });

  const navigate = useNavigate();

  //유효성 검사 함수
  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setErrors(prev => ({ ...prev, email: '유효하지 않은 이메일 주소입니다.' }));
    } else {
      setErrors(prev => ({ ...prev, email: '' }));
    }
  };

  const validateNickname = (nickname: string) => {
    if (nickname.trim() === '') {
      setErrors(prev => ({ ...prev, nickname: '닉네임을 입력해주세요.' }));
    } else {
      setErrors(prev => ({ ...prev, nickname: '' }));
    }
  };

  const validatePassword = (password: string) => {
    if (!password) {
      setErrors(prev => ({ ...prev, password: '비밀번호를 입력해주세요.' }));
    } else if (password.length < 8) {
      setErrors(prev => ({ ...prev, password: '비밀번호는 8자 이상이어야 합니다.' }));
    } else {
      setErrors(prev => ({ ...prev, password: '' }));
    }
  };

  const validateConfirmPassword = (password: string, confirmPassword: string) => {
    if (!confirmPassword) {
      setErrors(prev => ({ ...prev, confirmPassword: '비밀번호 확인을 입력해주세요.' }));
    } else if (password !== confirmPassword) {
      setErrors(prev => ({ ...prev, confirmPassword: '비밀번호가 일치하지 않습니다.' }));
    } else {
      setErrors(prev => ({ ...prev, confirmPassword: '' }));
    }
  };

  const validatePhone = (phone: PhoneState) => {
    const phoneRegex = /^\d{3,4}$/;
    if (
      !phoneRegex.test(phone.part1) ||
      !phoneRegex.test(phone.part2) ||
      !phoneRegex.test(phone.part3)
    ) {
      setErrors(prev => ({ ...prev, phone: '유효하지 않은 전화번호입니다.' }));
    } else {
      setErrors(prev => ({ ...prev, phone: '' }));
    }
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
    validateEmail(e.target.value);
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
    validatePassword(e.target.value);
  };

  const handleConfirmPasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setConfirmPassword(e.target.value);
    validateConfirmPassword(password, e.target.value);
  };

  const handlePhoneChange = (part: keyof PhoneState) => (e: React.ChangeEvent<HTMLInputElement>) => {
    const newPhone = { ...phone, [part]: e.target.value };
    setPhone(newPhone);
    validatePhone(newPhone);
  };

  // 이메일 중복 확인 상태
  const [emailDuplicateCheck, setEmailDuplicateCheck] = useState(false);

  // 이메일 중복 확인 핸들러
  const handleCheckEmail = async (e) => {
    e.preventDefault(); // 이벤트 버블링 방지
    setEmailDuplicateCheck(true);
    try {
      const isDuplicate = await checkEmailDuplication(email);
      console.log(isDuplicate);
      setErrors(prev => ({ ...prev, email: isDuplicate ? '' : '이미 사용중인 이메일입니다.' }));
    } catch (error) {
      console.error('이메일 중복 확인 중 오류가 발생했습니다.', error);
      setErrors(prev => ({ ...prev, email: '이메일 중복 확인 중 오류가 발생했습니다.' }));
    }
  };
  // 닉네임 중복 확인 상태
  const [nicknameCheck, setNicknameCheck] = useState({
    checked: false,
    valid: false
  });

  // 닉네임 필드 입력 변경 핸들러
  const handleNicknameInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNickname(e.target.value);
    validateNickname(e.target.value);
    setNicknameCheck({ ...nicknameCheck, checked: false }); // 중복 확인 상태를 초기화
  };
//닉네임 중복확인핸들러
  const handleCheckNickname = async () => {
    if (!nickname.trim()) {
      setErrors(prev => ({ ...prev, nickname: '닉네임을 입력해주세요.' }));
      return;
    }
    try {
      const isDuplicate = await checkNicknameDuplication(nickname);
      setNicknameCheck({ checked: true, valid: !isDuplicate });
      setErrors(prev => ({ ...prev, nickname: isDuplicate ? '' : '이미 사용중인 닉네임입니다.' }));
    } catch (error) {
      console.error('닉네임 중복 확인 중 오류가 발생했습니다.', error);
      setErrors(prev => ({ ...prev, nickname: '닉네임 중복 확인 중 오류가 발생했습니다.' }));
    }
  };
  

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    validateEmail(email);
    validatePassword(password);
    validateConfirmPassword(password, confirmPassword);
    validateNickname(nickname);
    validatePhone(phone);
 
  if (Object.values(errors).every(error => error === '')) {
      try {
      // 전화번호 문자열 생성
      const phoneNumber = `${phone.part1}-${phone.part2}-${phone.part3}`;
      // 회원가입 API 호출
      await submitSignup({ email, password, nickname, phone: phoneNumber });
      // 회원가입 성공 후 메인 페이지로 리디렉션
      navigate('/');
      } catch (error) {
      // 오류 처리
      }
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

      {/* 이메일 필드 */}
         <SU.FieldContainer>
          <h1>회원가입</h1>
          <label htmlFor="email">이메일</label>
          <SU.InputField>
            <SU.Input
              id="email"
              type="email"
              value={email}
              onChange={handleEmailChange}
              placeholder="이메일을 입력하세요"
            />
            <SU.CheckButton type="button" onClick={handleCheckEmail}>중복 확인</SU.CheckButton>
            </SU.InputField>

        {emailDuplicateCheck && errors.email && <SU.ErrorMsg>{errors.email}</SU.ErrorMsg>}

      {/* 닉네임 필드 */}
    <label htmlFor="nickname">닉네임</label>
    <SU.InputField>
          <SU.Input
            id="nickname"
            type="text"
            value={nickname}
            onChange={handleNicknameInputChange}
            placeholder="닉네임을 입력하세요"
            autoComplete="username"
          />
          <SU.CheckButton type="button" onClick={handleCheckNickname}>중복 확인</SU.CheckButton>
          </SU.InputField>
          {nicknameCheck.checked && errors.nickname && <SU.ErrorMsg>{errors.nickname}</SU.ErrorMsg>}

      <label htmlFor="password">비밀번호</label>  
       <SU.InputPassword
           type="password"
           value={password}
           onChange={handlePasswordChange}
           placeholder="8자리 이상 15자리 이하로 작성해주세요"
           autoComplete="new-password"
        />

    {errors.password && <p className="error">{errors.password}</p>}

    <SU.InputPassword
      type="password"
      value={confirmPassword}
      onChange={handleConfirmPasswordChange}
      placeholder="비밀번호를 다시 입력해주세요"
      autoComplete="new-password"
    />
    {errors.confirmPassword && <p className="error">{errors.confirmPassword}</p>}


    {/* 핸드폰 번호 필드 */}
    <SU.Label htmlFor="phone">핸드폰 번호</SU.Label>
    <SU.PhoneInputField>
      <SU.PhoneInput
        id="phone1"
        type="text"
        maxLength={3}
        placeholder="010"
        value={phone.part1}
        onChange={handlePhoneChange('part1')}
      />
      <SU.PhoneInput
        id="phone2"
        type="text"
        maxLength={4}
        placeholder="1234"
        value={phone.part2}
        onChange={handlePhoneChange('part2')}
      />
      <SU.PhoneInput
        id="phone3"
        type="text"
        maxLength={4}
        placeholder="5678"
        value={phone.part3}
        onChange={handlePhoneChange('part3')}
      />
      </SU.PhoneInputField>
<SU.SignUpButton type="submit">가입하기</SU.SignUpButton>
</SU.FieldContainer>
</SU.SignupForm>

</SU.GridContainer>
</SU.MainContainer>
);
};
export default SignUp;

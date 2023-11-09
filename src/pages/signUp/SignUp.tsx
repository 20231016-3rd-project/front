import React, { useState } from 'react';
import { checkEmailDuplication, checkNicknameDuplication } from '../../services/AuthService';
import { Container, Input, Button, ErrorMsg, FieldContainer, Label, InputButtonContainer, InputField, PhoneFieldContainer, PhoneInputContainer, PhoneInput, SignUpButton, CheckButton } from './SignUp.styles';

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

  // ... 유효성 검사 함수들 ...
  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setErrors(prev => ({ ...prev, email: '유효하지 않은 이메일 주소입니다.' }));
    } else {
      setErrors(prev => ({ ...prev, email: '' }));
    }
  };

  const validatePassword = (password: string) => {
    if (password.length < 8) {
      setErrors(prev => ({ ...prev, password: '비밀번호는 8자 이상이어야 합니다.' }));
    } else {
      setErrors(prev => ({ ...prev, password: '' }));
    }
  };

  const validateConfirmPassword = (password: string, confirmPassword: string) => {
    if (password !== confirmPassword) {
      setErrors(prev => ({ ...prev, confirmPassword: '비밀번호가 일치하지 않습니다.' }));
    } else {
      setErrors(prev => ({ ...prev, confirmPassword: '' }));
    }
  };

  const validateNickname = (nickname: string) => {
    if (nickname.trim() === '') {
      setErrors(prev => ({ ...prev, nickname: '닉네임을 입력해주세요.' }));
    } else {
      setErrors(prev => ({ ...prev, nickname: '' }));
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
  const handleCheckEmail = async () => {
    setEmailDuplicateCheck(true);
    try {
      const isDuplicate = await checkEmailDuplication(email);
      setErrors(prev => ({ ...prev, email: isDuplicate ? '이미 사용중인 이메일입니다.' : '' }));
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

  // 닉네임 중복 확인 핸들러
  const handleCheckNickname = async () => {
    if (!nickname.trim()) {
      setErrors(prev => ({ ...prev, nickname: '닉네임을 입력해주세요.' }));
      return;
    }
    try {
      const isDuplicate = await checkNicknameDuplication(nickname);
      setNicknameCheck({ checked: true, valid: !isDuplicate });
      setErrors(prev => ({ ...prev, nickname: isDuplicate ? '이미 사용중인 닉네임입니다.' : '' }));
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
 
 const isEmailDuplicate = await checkEmailDuplication(email);
    if (isEmailDuplicate) {
      setErrors(prev => ({ ...prev, email: '이미 사용중인 이메일입니다.' }));
      return;
    }

  const isNicknameDuplicate = await checkNicknameDuplication(nickname);
    if (isNicknameDuplicate) {
      setErrors(prev => ({ ...prev, nickname: '이미 사용중인 닉네임입니다.' }));
      return;
    }

  if (Object.values(errors).every(error => error === '')) {

   console.log('Submitting', { email, password, nickname, phone });
}
};
return (
  <Container>
    <form onSubmit={handleSubmit}>
      {/* 이메일 필드 */}
      <FieldContainer>
        <Label htmlFor="email">이메일</Label>
        <InputButtonContainer>
          <InputField>
            <Input
              id="email"
              type="email"
              value={email}
              onChange={handleEmailChange}
              placeholder="이메일을 입력하세요"
            />
          </InputField>
          <CheckButton onClick={handleCheckEmail}>중복 확인</CheckButton>

        </InputButtonContainer>
        {emailDuplicateCheck && errors.email && <ErrorMsg>{errors.email}</ErrorMsg>}
      </FieldContainer>

      {/* 닉네임 필드 */}
      <FieldContainer>
        <Label htmlFor="nickname">닉네임</Label>
        <InputButtonContainer>
          <InputField>
            <Input
              id="nickname"
              type="text"
              value={nickname}
              onChange={handleNicknameInputChange}
              placeholder="닉네임을 입력하세요"
            />
          </InputField>
          <CheckButton onClick={handleCheckEmail}>중복 확인</CheckButton>

        </InputButtonContainer>
        {nicknameCheck.checked && errors.nickname && <ErrorMsg>{errors.nickname}</ErrorMsg>}
      </FieldContainer>
      <FieldContainer>
        <Label htmlFor="password">비밀번호</Label>     
    <Input
      type="password"
      value={password}
      onChange={handlePasswordChange}
      placeholder="8자리 이상 15자리 이하로 작성해주세요"
    />
    {errors.password && <p className="error">{errors.password}</p>}
    </FieldContainer>
    <Input
      type="password"
      value={confirmPassword}
      onChange={handleConfirmPasswordChange}
      placeholder="비밀번호를 다시 입력해주세요"
    />
    {errors.confirmPassword && <p className="error">{errors.confirmPassword}</p>}
  {/* 핸드폰 번호 필드 */}
  <FieldContainer>
    < PhoneFieldContainer>
        <Label htmlFor="phone">핸드폰 번호</Label>
        <PhoneInputContainer>
          <PhoneInput
            id="phone1"
            type="text"
            maxLength={3}
            placeholder="010"
            value={phone.part1}
            onChange={handlePhoneChange('part1')}
          />
          <PhoneInput
            id="phone2"
            type="text"
            maxLength={4}
            placeholder="1234"
            value={phone.part2}
            onChange={handlePhoneChange('part2')}
          />
          <PhoneInput
            id="phone3"
            type="text"
            maxLength={4}
            placeholder="5678"
            value={phone.part3}
            onChange={handlePhoneChange('part3')}
          />
        </PhoneInputContainer>
     </PhoneFieldContainer>
    </FieldContainer>
      <SignUpButton type="submit">가입하기</SignUpButton>
  </form>
  </Container>
);
};
export default SignUp;
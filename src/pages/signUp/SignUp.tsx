import React, { useState } from 'react';
import { checkEmailDuplication, checkNicknameDuplication } from '../../services/AuthService'; // 경로는 적절히 수정하세요

// 전화번호 상태를 위한 인터페이스
interface PhoneState {
  part1: string;
  part2: string;
  part3: string;
}

// 컴포넌트 정의
const SignUp = () => {
  // 상태 초기화
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

  // 각 필드의 유효성을 검사하는 함수들
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

  // 입력 처리 함수들
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

  const handleNicknameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNickname(e.target.value);
    validateNickname(e.target.value);
  };

  const handlePhoneChange = (part: keyof PhoneState) => (e: React.ChangeEvent<HTMLInputElement>) => {
    const newPhone = { ...phone, [part]: e.target.value };
    setPhone(newPhone);
    validatePhone(newPhone);
  };

  // 폼 제출 처리 함수
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // 각 필드의 유효성을 검사합니다.
    validateEmail(email);
    validatePassword(password);
    validateConfirmPassword(password, confirmPassword);
    validateNickname(nickname);
    validatePhone(phone);
      // 중복 확인 로직 추가
 
 const isEmailDuplicate = await checkEmailDuplication(email);
    if (isEmailDuplicate) {
      setErrors(prev => ({ ...prev, email: '이미 사용중인 이메일입니다.' }));
      return; // 중복되는 이메일이 있으면 여기서 종료
    }

  const isNicknameDuplicate = await checkNicknameDuplication(nickname);
    if (isNicknameDuplicate) {
      setErrors(prev => ({ ...prev, nickname: '이미 사용중인 닉네임입니다.' }));
      return; // 중복되는 닉네임이 있으면 여기서 종료
    }

// 모든 필드의 오류가 없는 경우에만 제출 로직을 진행합니다.
  if (Object.values(errors).every(error => error === '')) {
  // 제출 로직
   console.log('Submitting', { email, password, nickname, phone });
  // 여기에 서버로 데이터를 보내는 로직을 추가하세요.
  // 예: submitSignup({ email, password, nickname, phone });
}
};

return (
  <form onSubmit={handleSubmit}>
    {/* 이메일 필드 */}
    <input
      type="email"
      value={email}
      onChange={handleEmailChange}
      placeholder="Email"
    />
    {errors.email && <p className="error">{errors.email}</p>}

    {/* 비밀번호 필드 */}
    <input
      type="password"
      value={password}
      onChange={handlePasswordChange}
      placeholder="Password"
    />
    {errors.password && <p className="error">{errors.password}</p>}

    {/* 비밀번호 확인 필드 */}
    <input
      type="password"
      value={confirmPassword}
      onChange={handleConfirmPasswordChange}
      placeholder="Confirm Password"
    />
    {errors.confirmPassword && <p className="error">{errors.confirmPassword}</p>}

    {/* 닉네임 필드 */}
    <input
      type="text"
      value={nickname}
      onChange={handleNicknameChange}
      placeholder="Nickname"
    />
    {errors.nickname && <p className="error">{errors.nickname}</p>}

    {/* 전화번호 필드 */}
    <div>
      <input
        type="text"
        value={phone.part1}
        onChange={handlePhoneChange('part1')}
        maxLength={3}
        placeholder="010"
      />
      -
      <input
        type="text"
        value={phone.part2}
        onChange={handlePhoneChange('part2')}
        maxLength={4}
        placeholder="1234"
      />
      -
      <input
        type="text"
        value={phone.part3}
        onChange={handlePhoneChange('part3')}
        maxLength={4}
        placeholder="5678"
      />
      {errors.phone && <p className="error">{errors.phone}</p>}
    </div>

    {/* 제출 버튼 */}
    <button type="submit">Sign Up</button>
  </form>
);
};
export default SignUp;
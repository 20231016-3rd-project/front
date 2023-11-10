import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { deleteUserProfile, updateProfile, checkNicknameDuplication } from '../../../services/AuthService';

const MySettingPage = () => {
  const [profileImage, setProfileImage] = useState(null);
  const [nickName, setNickName] = useState('');
  const [phone, setPhone] = useState('');
  const [authToken, setAuthToken] = useState(''); // 인증 토큰을 상태로 관리합니다.

  const navigate = useNavigate();

  const handleProfileImageChange = (event) => {
    setProfileImage(event.target.files[0]);
  };

  const handleNickNameChange = async (event) => {
    const newNickName = event.target.value;
    setNickName(newNickName);
      // 닉네임 중복 검사를 수행합니다.
      try {
        const isDuplicate = await checkNicknameDuplication(newNickName);
        if (isDuplicate) {
          alert('이미 사용 중인 닉네임입니다.');
          // 중복된 닉네임이면 상태를 초기화하거나 사용자에게 알립니다.
        }
      } catch (error) {
        console.error('닉네임 중복 검사 중 오류가 발생했습니다.', error);
      }
    };

  const handlePhoneChange = (event) => {
    setPhone(event.target.value);
  };

  const handleSaveChanges = async () => {
    try {
      const data = {
        nickname: nickName,
        phone: phone,
        memberProfilePicture: profileImage,
      };
      const response = await updateProfile(data, authToken);
      if (response.message === '회원수정 성공') {
        alert('회원 정보가 수정되었습니다.');
        // 성공적으로 수정되면 상태를 업데이트하거나 페이지를 새로고침할 수 있습니다.
      } else {
        alert('회원 정보 수정에 실패했습니다.');
      }
    } catch (error) {
      console.error('회원 정보 수정 중 오류가 발생했습니다.', error);
    }
  };

 const handleDeleteAccount = async () => {
  if (window.confirm('정말로 탈퇴하시겠습니까? 이 작업은 되돌릴 수 없습니다.')) {
    try {
      const response = await withdrawUser(authToken);
      if (response.message === '회원탈퇴 완료') {
        alert('회원 탈퇴가 완료되었습니다.');
        // 로그아웃 처리 및 메인 페이지로 리디렉션
        navigate('/');
      } else {
        alert('회원 탈퇴에 실패했습니다.');
      }
    } catch (error) {
      console.error('회원 탈퇴 중 오류가 발생했습니다.', error);
    }
    
  }
};


  return (
    <div>
      <h1>회원 정보 수정</h1>
      <div>
        <label>프로필 사진:</label>
        <input type="file" onChange={handleProfileImageChange} />
      </div>
      <div>
        <label>닉네임:</label>
        <input type="text" value={nickName} onChange={handleNickNameChange} />
      </div>
      <div>
        <label>전화번호:</label>
        <input type="text" value={phone} onChange={handlePhoneChange} />
      </div>
      <button onClick={handleSaveChanges}>변경사항 저장</button>
      <button onClick={handleDeleteAccount} style={{ backgroundColor: 'red', color: 'white' }}>
        회원 탈퇴
      </button>
    </div>
  );
};

export default MySettingPage;
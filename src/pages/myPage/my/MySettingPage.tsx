import React, { useEffect, useState } from 'react';
import heart from '../../../assets/images/heart.svg';
import reviews from '../../../assets/images/review.svg';
import editprofile from '../../../assets/images/editprofile.svg';
import UserInfoPage from './UserInfoPage';
import { getMyProfile } from '../../../apis/profileApi';
import * as Set from "./styles/Userinfo";

const MySettingPage = () => {
  const [isUserInfoVisible, setUserInfoVisible] = useState(false);
  const [nickName, setNickName] = useState('');
  const [profileImage, setProfileImage] = useState('');
  const handleUserInfoClick = () => {
    setUserInfoVisible(true);
  };

  const handleClose = () => {
    setUserInfoVisible(false);
  };

  useEffect(() => {
    getMyProfile().then((r) => {
      setNickName(r.nickName);
      setProfileImage(r.memberProfilePicture);
    });
  }, []);
  return (
    <Set.VerticalContainer>
      <Set.FirstDiv>
        <Set.OverlapCircle backgroundImage={profileImage} />
        <Set.SetText>
          <h1>{nickName}</h1>
          {/* <p>햄토리 주인</p> */}
        </Set.SetText>
      </Set.FirstDiv>

      <Set.SecondDiv>
        <Set.LinkSection>
          <Set.SLink to="#" onClick={handleUserInfoClick}>
            <Set.SetText2>
              <Set.LinkIcon src={editprofile} alt="" />
              <Set.Text>내정보수정</Set.Text>
            </Set.SetText2>
          </Set.SLink>
        </Set.LinkSection>

        <UserInfoPage isVisible={isUserInfoVisible} onClose={handleClose} />
        <Set.LinkSection>
          <Set.SLink to="mylike">
            <Set.SetText2>
              <Set.LinkIcon src={heart} alt="" />
              <Set.Text>나의좋아요</Set.Text>
            </Set.SetText2>
          </Set.SLink>
        </Set.LinkSection>

        <Set.LinkSection>
          <Set.SLink to="Reviews">
            <Set.SetText2>
              <Set.LinkIcon src={reviews} alt="" />
              <Set.Text>나의리뷰관리</Set.Text>
            </Set.SetText2>
          </Set.SLink>
        </Set.LinkSection>
      </Set.SecondDiv>

      <Set.ThirdDiv />
    </Set.VerticalContainer>
  );
};

export default MySettingPage;

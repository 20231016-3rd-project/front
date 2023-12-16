import React, { useEffect, useState } from 'react';
import styled, { css } from 'styled-components';
import heart from '../../../assets/images/heart.svg';
import backgroundImage from '../../../assets/images/newuser.png'; // 가정한 배경 이미지
import firstDivImage from '../../../assets/images/adminbg.png'; // FirstDiv 배경 이미지
import thirdDivImage from '../../../assets/images/adminbg.png'; // ThirdDiv 배경 이미지
import reviews from '../../../assets/images/review.svg';
import editprofile from '../../../assets/images/editprofile.svg';
import { Link } from 'react-router-dom';
import UserInfoPage from './UserInfoPage';
import { getMyProfile } from '../../../apis/profileApi';

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
      setProfileImage(r.memberProfileImage);
    });
  }, []);
  return (
    <VerticalContainer>
      <FirstDiv>
        <OverlapCircle />
        <SetText>
          <h1>{nickName}</h1>
          {/* <p>햄토리 주인</p> */}
        </SetText>
      </FirstDiv>

      <SecondDiv>
        <LinkSection>
          <SLink to="#" onClick={handleUserInfoClick}>
            <SetText2>
              <LinkIcon src={editprofile} alt="" />
              <Text>내정보수정</Text>
            </SetText2>
          </SLink>
        </LinkSection>

        <UserInfoPage isVisible={isUserInfoVisible} onClose={handleClose} />
        <LinkSection>
          <SLink to="mylike">
            <SetText2>
              <LinkIcon src={heart} alt="" />
              <Text>나의좋아요</Text>
            </SetText2>
          </SLink>
        </LinkSection>

        <LinkSection>
          <SLink to="Reviews">
            <SetText2>
              <LinkIcon src={reviews} alt="" />
              <Text>나의리뷰관리</Text>
            </SetText2>
          </SLink>
        </LinkSection>
      </SecondDiv>

      <ThirdDiv />
    </VerticalContainer>
  );
};

export default MySettingPage;

const SetPosition = css`
  position: absolute;
  bottom: -110px;
  left: 50%;
  transform: translateX(-50%);
`;

const VerticalContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-between;
  width: 100vw;
  height: 100vh;
  background-color: #f3f3f3;
`;

const FirstDiv = styled.div`
  width: 70%;
  height: 20%;
  background: url(${firstDivImage}) no-repeat center center;
  background-size: cover;
  position: relative;
  border-radius: 0px 0px 20px 20px;
`;

const OverlapCircle = styled.div`
  width: 160px;
  height: 160px;
  border-radius: 50%;
  position: absolute;
  bottom: -50px;
  left: 50%;
  transform: translateX(-50%);
  background: url(${backgroundImage}) no-repeat center center;
  background-size: cover;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const SetText = styled.div`
  width: 150px;
  height: 50px;
  text-align: center;
  display: flex;
  flex-direction: column;
  gap: 10px;
  ${SetPosition}

  h1 {
    font-size: 1.4rem;
    font-weight: bold;
    color: #a303a0;
  }

  p {
    font-size: 1rem;
    color: #a303a0;
  }
`;

// 두 번째
const SecondDiv = styled.div`
  width: 70%;
  height: 30%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  background-color: #ffb115;
  border-radius: 20px;
`;

const LinkSection = styled.div`
  width: 11rem;
  height: 14rem;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  position: relative;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  background-color: #ffaa00;
  border: 1px solid #e0e0e0;
  border-radius: 20px;
  &:active {
    transform: scale(0.95);
  }
`;

const SetText2 = styled.div`
  width: 100px;
  height: 50px;
  text-align: center;
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-bottom: 20px;
  color: white;
  font-weight: bold;
`;

const LinkIcon = styled.img`
  height: 60px;
  width: 60px;
  position: absolute;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

//마지막 맨 아래
const ThirdDiv = styled.div`
  width: 70%;
  height: 20%;
  background: url(${thirdDivImage}) no-repeat center center;
  background-size: cover;
  border-radius: 20px 20px 0px 0px;
`;

const SLink = styled(Link)`
  &:visited,
  &:link {
    text-decoration: none;
    color: black;
  }
`;
const Text = styled.p``;

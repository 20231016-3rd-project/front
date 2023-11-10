import styled, { css, keyframes } from 'styled-components';
import review from '../../../assets/images/review.svg';
import chat from '../../../assets/images/🦆 illustration _conversation chat bubble bubbles_.svg';
import list from '../../../assets/images/🦆 icon _wish list_.svg';
import regist from '../../../assets/images/🦆 icon _domain registration_.svg';
import closure from '../../../assets/images/closure.svg';
import admin from '../../../assets/images/パソコンを打つビジネスウーマンのイラスト.jpg';
import adminbg from '../../../assets/images/adminbg.png';
import { Link } from 'react-router-dom';

const AdminSettingPage: React.FC = () => {
  return (
    <VerticalContainer>
      <FirstDiv>
        <img src={adminbg} alt="관리자프로필" />
        <OverlapCircle>
          <img src={admin} alt="관리자프로필" />
        </OverlapCircle>
        <SetText>
          <h1>관리자전용</h1>
        </SetText>
      </FirstDiv>

      <SecondDiv>
        <LinkSection>
          <Link to="/admin/regist">
            <LinkIcon src={regist} alt="" />
            <SetText2>
              <h1>가게등록</h1>
            </SetText2>
          </Link>
        </LinkSection>

        <LinkSection>
          <Link to="/admin/report">
            <SetText2>
              <LinkIcon src={review} alt="" />
              <h1>리뷰신고내역</h1>
            </SetText2>
          </Link>
        </LinkSection>

        <LinkSection>
          <Link to="/admin/registli">
            <SetText2>
              <LinkIcon src={list} alt="" />
              <h1>가게등록내역</h1>
            </SetText2>
          </Link>
        </LinkSection>

        <LinkSection>
          <Link to="/admin/closure">
            <SetText2>
              <LinkIcon src={closure} alt="" />
              <h1>폐업신고내역</h1>
            </SetText2>
          </Link>
        </LinkSection>

        <LinkSection>
          <Link to="/admin/adminchat">
            <SetText2>
              <LinkIcon src={chat} alt="" />
              <h1>채팅상담</h1>
              <p>--준비중--</p>
            </SetText2>
          </Link>
        </LinkSection>
      </SecondDiv>

      <ThirdDiv>
        <img src={adminbg} alt="관리자프로필" />
      </ThirdDiv>
    </VerticalContainer>
  );
};

export default AdminSettingPage;

const SetPosition = css`
  position: absolute;
  bottom: -110px;
  left: 50%;
  transform: translateX(-50%);
`;

const gradientAnimation = keyframes`
  0% {
    background-position: 0% 50%;
  }
  100% {
    background-position: 100% 50%;
  }
`;

const VerticalContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-between;
  width: 100vw;
  height: 100vh;
  background-color: #f0f0f0;
`;

const FirstDiv = styled.div`
  width: 60%;
  height: 20%;
  border: 1px solid blue;
  position: relative;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const OverlapCircle = styled.div`
  border: 1px solid grey;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.3);
  width: 170px;
  height: 170px;
  background-color: white;
  border-radius: 50%;
  position: absolute;
  bottom: -50px;
  left: 50%;
  transform: translateX(-50%);
  overflow: hidden; // 추가된 코드
  img {
    width: 100%;
    height: 100%;
    object-fit: fill;
  }
`;

const SetText = styled.div`
  width: 100px;
  height: 50px;
  text-align: center;
  display: flex;
  flex-direction: column;
  gap: 10px;
  ${SetPosition}
`;

// 두 번째
const SecondDiv = styled.div`
  width: 60%;
  height: 30%;
  border: 1px solid grey;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  background-color: #ffa800;
`;

const LinkSection = styled.div`
  width: 11rem;
  height: 14rem;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  position: relative;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.3);
`;

const SetText2 = styled.div`
  width: 100px;
  height: 50px;
  text-align: center;
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-bottom: 40px;
`;

const LinkIcon = styled.img`
  height: 60px;
  width: 60px;
  position: absolute; // 절대 위치를 사용합니다.
  top: 40%; // 상단 가장자리로부터 50% 떨어진 위치에 있습니다.
  left: 50%; // 왼쪽 가장자리로부터 50% 떨어진 위치에 있습니다.
  transform: translate(
    -50%,
    -50%
  ); // 요소의 중심을 정확한 위치로 이동시키기 위해 사용합니다.
`;

//마지막 맨 아래
const ThirdDiv = styled.div`
  width: 60%;
  height: 20%;
  border: 1px solid blue;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

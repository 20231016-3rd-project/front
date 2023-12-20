import styled, { css } from 'styled-components';
import firstDivImage from '../../../../assets/images/adminbg.png'; // FirstDiv 배경 이미지
import thirdDivImage from '../../../../assets/images/adminbg.png'; // ThirdDiv 배경 이미지
import { Link } from 'react-router-dom';

export const SetPosition = css`
  position: absolute;
  bottom: -110px;
  left: 50%;
  transform: translateX(-50%);
`;

export const VerticalContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-between;
  width: 100vw;
  height: 100vh;
  background-color: #f3f3f3;
`;

export const FirstDiv = styled.div`
  width: 70%;
  height: 20%;
  background: url(${firstDivImage}) no-repeat center center;
  background-size: cover;
  position: relative;
  border-radius: 0px 0px 20px 20px;
`;
export interface OverlapCircleProps {
  backgroundImage: string;
}
export const OverlapCircle = styled.div<OverlapCircleProps>`
  width: 160px;
  height: 160px;
  border-radius: 50%;
  position: absolute;
  bottom: -50px;
  left: 50%;
  transform: translateX(-50%);
  background: url(${(props) => props.backgroundImage}) no-repeat center center;
  background-size: cover;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

export const SetText = styled.div`
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
export const SecondDiv = styled.div`
  width: 70%;
  height: 30%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  background-color: #ffb115;
  border-radius: 20px;
`;

export const LinkSection = styled.div`
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

export const SetText2 = styled.div`
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

export const LinkIcon = styled.img`
  height: 60px;
  width: 60px;
  position: absolute;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

//마지막 맨 아래
export const ThirdDiv = styled.div`
  width: 70%;
  height: 20%;
  background: url(${thirdDivImage}) no-repeat center center;
  background-size: cover;
  border-radius: 20px 20px 0px 0px;
`;

export const SLink = styled(Link)`
  &:visited,
  &:link {
    text-decoration: none;
    color: black;
  }
`;
export const Text = styled.p``;

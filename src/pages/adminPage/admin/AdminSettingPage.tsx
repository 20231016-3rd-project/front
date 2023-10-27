import styled, {css} from 'styled-components';
import heart from '../../../assets/images/heart.svg';

const AdminSettingPage: React.FC = () => { 
  return (
    <VerticalContainer>
    <FirstDiv>
      <OverlapCircle />
      <SetText>
        <h1>닉네임</h1>
        <h1>몰라몰라몰라</h1>
      </SetText>
    </FirstDiv>


    <SecondDiv>
      
      <LinkSection>
      <LinkIcon src={heart} alt=""/>
        <SetText2>
          <h1>닉네임</h1>
          <h1>몰라몰라몰라</h1>
        </SetText2>
      </LinkSection>

      <LinkSection>
        <SetText2>
        <LinkIcon src={heart} alt=""/>
          <h1>닉네임</h1>
          <h1>몰라몰라몰라</h1>
        </SetText2>
      </LinkSection>
      
      <LinkSection>
        <SetText2>
        <LinkIcon src={heart} alt=""/>
          <h1>닉네임</h1>
          <h1>몰라몰라몰라</h1>
        </SetText2>
      </LinkSection>
    </SecondDiv>


    <ThirdDiv/>
  </VerticalContainer>
    
  );
  
}

export default AdminSettingPage

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
`;

const FirstDiv = styled.div`
  width: 50%;
  height: 20%;
  border: 1px solid blue;
  position: relative;
`;

const OverlapCircle = styled.div`
  width: 170px;
  height: 170px;
  background-color: white;
  border: 1px solid green;
  border-radius: 50%;
  position: absolute;
  bottom: -50px;
  left: 50%;
  transform: translateX(-50%);
`;

const SetText = styled.div`
  width: 100px;
  height: 50px;
  border: 1px solid red;
  text-align: center;
  display: flex;
  flex-direction: column;
  gap: 10px;
  ${SetPosition}
`;

// 두 번째 
const SecondDiv = styled.div`
  width: 50%;
  height: 30%;
  border: 1px solid blue;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  background-color: #FFA800;
`;

const LinkSection = styled.div`
  width: 11rem;
  height: 14rem;
  border: 1px solid black;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  position: relative;
`;

const SetText2 = styled.div`
  width: 100px;
  height: 50px;
  border: 1px solid red;
  text-align: center;
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-bottom: 40px;
`;

const LinkIcon = styled.img`
  height: 60px;
  width: 60px;
  border: 1px solid blue;
  position: absolute; // 절대 위치를 사용합니다.
  top: 40%; // 상단 가장자리로부터 50% 떨어진 위치에 있습니다.
  left: 50%; // 왼쪽 가장자리로부터 50% 떨어진 위치에 있습니다.
  transform: translate(-50%, -50%); // 요소의 중심을 정확한 위치로 이동시키기 위해 사용합니다.
`

//마지막 맨 아래 
const ThirdDiv = styled.div`
  width: 50%;
  height: 20%;
  border: 1px solid blue;
`;




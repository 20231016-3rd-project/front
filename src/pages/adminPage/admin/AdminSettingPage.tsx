
import styled, {css} from 'styled-components';
import { Link } from 'react-router-dom';

import logo from "../../../assets/images/sunflower.png"
import closure from "../../../assets/images/closure.svg"
import registli from "../../../assets/images/registli.svg"
import chat from "../../../assets/images/chat.svg"
import home from "../../../assets/images/home.svg"
import report from "../../../assets/images/report.svg"
const AdminSettingPage: React.FC = () => { 
  return (
    <GridContainer>
      <AdminNav>
        <LogoSection>
          <div>
          <img src={logo} alt="" />
          <h1>Sunflower Plate</h1>
          </div>
        </LogoSection>

        <LinkSection>

        <LinkBox>
          <div>
          <img src={home} alt="" />
          </div>
         <p>Home</p>
         </LinkBox>

         <LinkBox>
         <div>
         <img src={registli} alt="" />
         </div>
         <p>Store Registration</p>
         </LinkBox>

         <LinkBox>
         <div>
         <img src={closure} alt="" />
         </div>
         <p>Closure Record</p>
         </LinkBox>

         <LinkBox>
         <div>
         <img src={report} alt="" />
         </div>
         <p>Report</p>
         </LinkBox>


         <LinkBox>
         <div>
         <img src={chat} alt="" />
         </div>
         <p>message</p>
         </LinkBox>
        </LinkSection>
      </AdminNav>

      <AdminMain>

      </AdminMain>
    </GridContainer>
   
  );
};

export default AdminSettingPage;

const SetPosition = css`
  position: absolute;
  bottom: -110px;
  left: 50%;
  transform: translateX(-50%);
`;


const GridContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 5fr;
  height: 100vh;
  gap: 10px;
  color: white;
`;

const AdminNav = styled.div`
  border: 1px solid black;
  padding: 30px;
  text-align: center;
  background-color: #414141;
`;

const LogoSection = styled.div`

  div{
    display: flex;
    align-items: center;
    gap: 5px;
    margin-right: 30px;
    margin-bottom: 50px;                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          px;
  }
  
  img{
    width: 40px;
    height:40px;
  }

  h1{
    font-size: 1rem;
  }


const LinkSection = styled.div`
  width: auto;
  height: auto;
  border: 1px solid red;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 30px;

img{
    width: 20px;
    height: 20px;
  }
  
`;

const LinkBox = styled.div`

p{
    display: flex;
    align-items: center;
  }
`;

const AdminMain = styled.div`
  border: 1px solid black;
  padding: 20px;
  text-align: center;
  
`;


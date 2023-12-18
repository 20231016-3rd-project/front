import * as Set from "../../pages/adminPage/admin/style/AdminSetStyle"
import home from "../../assets/images/home.svg"
import logo from "../../assets/images/sunflower.png"
import registli from "../../assets/images/registli.svg"
import chat from "../../assets/images/chat.svg"
import report from "../../assets/images/report.svg"
import closure from "../../assets/images/closure.svg"
import { Link } from 'react-router-dom';

import Toggle from "./Toggle";


const AdminNav: React.FC<{ isDay: boolean; setIsDay: (isDay: boolean) => void }>
 = ({ isDay, setIsDay }) => {
  return (
         <Set.AdminNavbar>
        <Set.LogoSection>
          <div>
            <img src={logo} alt="" />
            <h1>해바라기 플레이트</h1>
          </div>
        </Set.LogoSection>

        <Set.LinkSection>

        <Set.LinkBox>
          <div>
          <img src={home} alt="" />
          </div>
          <Link to="/admin">대쉬보드</Link>
         </Set.LinkBox>

         <Set.LinkBox>
         <div>
         <img src={registli} alt="" />
         </div>
         <Link to="/admin/regist">영업정 등록</Link>
         </Set.LinkBox>

         <Set.LinkBox>
         <div>
         <img src={registli} alt="" />
         </div>
         <Link to="/admin/registli">영업점 조회</Link>
         </Set.LinkBox>

         <Set.LinkBox>
         <div>
         <img src={closure} alt="" />
         </div>
         <Link to="/admin/closure">폐업/수정 조회</Link>
         </Set.LinkBox>

         <Set.LinkBox>
         <div>
         <img src={report} alt="" />
         </div>
         <Link to="/admin/report">리뷰신고 내역</Link>
         </Set.LinkBox>


         <Set.LinkBox>
         <div>
         <img src={chat} alt="" />
         </div>
         <Link to="/admin/adminchat">Message</Link>
         </Set.LinkBox>
        </Set.LinkSection>
        <Toggle isDay={isDay} setIsDay={setIsDay}/>
      </Set.AdminNavbar>
  )
}

export default AdminNav

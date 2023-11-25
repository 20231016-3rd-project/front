import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import Model from "../../../components/Admin/Model.tsx";


import logo from "../../../assets/images/sunflower.png"
import closure from "../../../assets/images/closure.svg"
import registli from "../../../assets/images/registli.svg"
import chat from "../../../assets/images/chat.svg"
import home from "../../../assets/images/home.svg"
import report from "../../../assets/images/report.svg"
import Admin from "../../../assets/images/admin.png"
import * as Set from "./style/AdminSetStyle"
import fruit from "../../../assets/images/fruit2png.png"
import RE from "../../../assets/images/adminRE.png"
import RE2 from "../../../assets/images/adminRE2.png"



const AdminSettingPage: React.FC = () => { 

  return (
    <Set.GridContainer>
      <Set.AdminNav>
        <Set.LogoSection>
          <div>
          <img src={logo} alt="" />
          <h1>Sunflower Plate</h1>
          </div>
        </Set.LogoSection>

        <Set.LinkSection>

        <Set.LinkBox>
          <div>
          <img src={home} alt="" />
          </div>
         <p>Home</p>
         </Set.LinkBox>

         <Set.LinkBox>
         <div>
         <img src={registli} alt="" />
         </div>
         <p>Store Registration</p>
         </Set.LinkBox>

         <Set.LinkBox>
         <div>
         <img src={closure} alt="" />
         </div>
         <p>Closure Record</p>
         </Set.LinkBox>

         <Set.LinkBox>
         <div>
         <img src={report} alt="" />
         </div>
         <p>Report</p>
         </Set.LinkBox>


         <Set.LinkBox>
         <div>
         <img src={chat} alt="" />
         </div>
         <p>message</p>
         </Set.LinkBox>
        </Set.LinkSection>

      </Set.AdminNav>

      <Set.AdminMain>
      <Set.AdminHeader>
        <Set.TextBox>
          <h1>Welcome,Back Admin!</h1>
          <p>here's what's happening with your store today.</p>
        </Set.TextBox>

        <Set.ProfileBox>
          <div>
            <img src={Admin} alt="어드민 프로필" />
          </div>
        </Set.ProfileBox>
      </Set.AdminHeader>

      <Set.DashBoardSection>
       <div className="box box1">
        <img src={fruit} alt="" className="fruit-image"/>
        <img src={RE} alt="" className="AdminRE-image"/>
        <img src={RE2} alt="" className="AdminRE2-image"/>
        <button>Store Registration</button>
       </div>
       <div className="box box2">
       <Canvas style={{ height: '400px' }}>
    <Suspense fallback={null}>
      <Model/>
    </Suspense>
  </Canvas>
  <Set.BoxChatButton>
      <h1>chat bot</h1>
  </Set.BoxChatButton>
      </div>
   {/* 
       <div className="box box3"> Box3 </div>
       <div className="box box4"> Box4 </div>
       <div className="box box5"> Box5 </div>
   */}
      </Set.DashBoardSection>

      </Set.AdminMain>

    </Set.GridContainer>
   
  );
};

export default AdminSettingPage;

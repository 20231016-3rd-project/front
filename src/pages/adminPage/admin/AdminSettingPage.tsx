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
import plus from "../../../assets/images/plus.png"
import search2 from "../../../assets/images/search.png"
import best3 from "../../../assets/images/best3.jpeg"

const best3List = [
  {src: best3, name: '금옥당 연희점', likes: '200+'},
  {src: best3, name: '금옥당 홍대점', likes: '300+'},
  {src: best3, name: '금옥당 마포점', likes: '400+'},
  {src: best3, name: '금옥당 중구점', likes: '200+'},
  {src: best3, name: '금옥당 수원점', likes: '300+'},
];


const AdminSettingPage: React.FC = () => { 

  const currentTime = Date.now();

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

        <div className="create">
          <h1>Create</h1>
        </div>

        <div className="icon">
          <img src={search2} alt="" />
        </div>

        <div className="icon">
           <img src={plus} alt="" />
        </div>

        <div className="profile">
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
   
       <div className="box box3">
       <h1>best restaurant 5</h1>

       <div className="bestmap">
      {best3List.map((item, index) => (
        <div key={index} className="best3">
          <img src={item.src} alt="" />
          <p>{item.name}</p>
          <p>좋아요: {item.likes}</p>
        </div>
      ))}
      </div>

       </div>
       <div className="box box4">

       </div>
  
      </Set.DashBoardSection>

      </Set.AdminMain>

    </Set.GridContainer>
   
  );
};

export default AdminSettingPage;

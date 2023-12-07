
import * as Set from "../../pages/adminPage/admin/style/AdminSetStyle"
import fruit from "../../assets/images/fruit2png.png"
import RE from "../../assets/images/adminRE.png"
import RE2 from "../../assets/images/adminRE2.png"
import best3 from "../../assets/images/best3.jpeg"
import warning from "../../assets/images/warning.svg"

import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import Model from "./Model";

const best3List = [
    {src: best3, name: '금옥당 연희점', likes: '200+'},
    {src: best3, name: '금옥당 홍대점', likes: '300+'},
    {src: best3, name: '금옥당 마포점', likes: '400+'},
    {src: best3, name: '금옥당 중구점', likes: '200+'},
    {src: best3, name: '금옥당 수원점', likes: '300+'},
  ];

const Dashboard: React.FC = () => { 
  return (
    <Set.DashBoardContainer>
       <Set.Box1>
        <img src={fruit} alt="" className="fruit-image"/>
        <img src={RE} alt="" className="AdminRE-image"/>
        <img src={RE2} alt="" className="AdminRE2-image"/>
        <button>Store Registration</button>
       </Set.Box1>

       <Set.Box2>
       <Canvas style={{ height: '400px' }}>
    <Suspense fallback={null}>
      <Model/>
    </Suspense>
  </Canvas>
  <Set.BoxChatButton>
      <h1>chat bot</h1>
  </Set.BoxChatButton>
      </Set.Box2>
   
       <Set.Box3>
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
      </Set.Box3>

       <Set.Box4>
        <img src={warning} alt="" />
      <Set.Box4Text>
        <h1>폐업/수정요청</h1>
        <p>5건</p>
      </Set.Box4Text>
       </Set.Box4>
       
 </Set.DashBoardContainer>
  )
}

export default Dashboard

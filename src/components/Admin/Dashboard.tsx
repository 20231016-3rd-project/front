import { useState, useEffect } from 'react'
import * as Set from "../../pages/adminPage/admin/style/AdminSetStyle"
import fruit from "../../assets/images/fruit3.png"
import RE from "../../assets/images/adminRE.png"
import RE2 from "../../assets/images/adminRE2.png"
import Closed from "../../assets/images/warning.svg"
import Stored from "../../assets/images/ icon _domain registration_.svg"
import Unlike from "../../assets/images/review.svg"
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import Model from "./Model";
import { fetchReportCount, fetchRestaurantCount, fetchClosureCount } from "../../apis/adminApi/dashboardApi";


const Dashboard: React.FC = () => {
  const [reportCount, setReportCount] = useState(0);
  const [restaurantCount, setRestaurantCount] = useState(0);
  const [ClosureCount, setClosureCount] = useState(0);

  useEffect(() => {
    const getReportCount = async () => {
      const count = await fetchReportCount();
      setReportCount(count);
    };

    getReportCount();
  }, []);

  useEffect(() => {
    const getRestaurantCount = async () => {
      const count = await fetchRestaurantCount();
      setRestaurantCount(count);
    };

    getRestaurantCount();
  }, []);

  useEffect(() => {
    const getClosureCount = async () => {
      const count = await fetchClosureCount();
      setClosureCount(count);
    };

    getClosureCount();
  }, []);
  

  return (
    <Set.DashBoardContainer>
       <Set.Box1>
        <img src={fruit} alt="" className="fruit-image"/>
        <img src={RE} alt="" className="AdminRE-image"/>
        <img src={RE2} alt="" className="AdminRE2-image"/>
        <button>식당등록 바로가기</button>
       </Set.Box1>

       <Set.Box2>
       <Canvas style={{ height: '400px' }}>
    <Suspense fallback={null}>
      <Model/>
    </Suspense>
  </Canvas>
  <Set.BoxChatButton>
      <h1>챗봇상담</h1>
  </Set.BoxChatButton>
      </Set.Box2>
   
       <Set.Box3>
       <img src={Unlike} alt="" />
       <Set.TextGridBox>
       <h1>리뷰신고</h1>
        <p>{reportCount}건</p>
        </Set.TextGridBox>
      </Set.Box3>

      <Set.Box4>
      <img src={Closed} alt="" />
      <Set.TextGridBox>
        <h1>폐업/수정요청</h1>
        <p>{ClosureCount}건</p>
      </Set.TextGridBox>
      </Set.Box4>

       <Set.Box5>
       <img src={Stored} alt="" />
       <Set.TextGridBox>
       <h1>총 식당등록 수</h1>
        <p>{restaurantCount}건</p>
        </Set.TextGridBox>
       </Set.Box5>
       
 </Set.DashBoardContainer>
  )
}

export default Dashboard

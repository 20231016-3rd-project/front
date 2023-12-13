
import { useState, useEffect } from 'react'
import * as Set from "../../pages/adminPage/admin/style/AdminSetStyle"
import fruit from "../../assets/images/fruit2png.png"
import RE from "../../assets/images/adminRE.png"
import RE2 from "../../assets/images/adminRE2.png"
import warning from "../../assets/images/warning.svg"
import axios from 'axios'
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import Model from "./Model";


const Dashboard: React.FC = () => { 
  const [reportData, setReportData] = useState<any>([]); //리뷰 신고 건수 
  
    useEffect(() => {
      // API 호출을 위한 함수
      const fetchReports = async () => {
        try {
          const accessToken = localStorage.getItem('accessToken');
          if (!accessToken) {
            throw new Error('Access token not found');
          }
  
          // axios를 사용하여 API 엔드포인트로 GET 요청을 보냄
          const headers = {
            "X-AUTH-TOKEN": accessToken,
          };
  
          const response = await axios.get('http://3.38.32.91/sunflowerPlate/admin/review/', {
            headers
          });
          // 여기서 응답이 배열인지 확인합니다.
        if (Array.isArray(response.data)) {
          setReportData(response.data);
        } else {
          // 데이터가 배열이 아닌 경우, 오류를 처리하거나 빈 배열을 설정할 수 있습니다.
          console.error("Received data is not an array:", response.data);
          setReportData([]);
        }
      } catch (error) {
        console.error("Fetching reports failed: ", error);
        // 오류 발생 시 빈 배열을 설정하여 .map 함수 오류를 방지합니다.
        setReportData([]);
      }
    };
  
    fetchReports();
  }, []);
  

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
       <img src={warning} alt="" />
       <Set.TextGridBox>
       <h1>리뷰신고</h1>
        <p>5건</p>
        </Set.TextGridBox>
      </Set.Box3>

      <Set.Box4>
      <img src={warning} alt="" />
      <Set.TextGridBox>
        <h1>폐업/수정요청</h1>
        <p>5건</p>
      </Set.TextGridBox>
      </Set.Box4>

       <Set.Box5>
       <img src={warning} alt="" />
       <Set.TextGridBox>
       <h1>총 식당등록 수</h1>
        <p>5건</p>
        </Set.TextGridBox>
       </Set.Box5>
       
 </Set.DashBoardContainer>
  )
}

export default Dashboard

import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { StMain } from '../../../components/Stmain';
import styled from 'styled-components';
import axios from 'axios';


const ClosurePage = () => {
    const [requests, setRequests] = useState([]);
    const navigate = useNavigate();
  
    useEffect(() => {
      // 로컬 스토리지에서 토큰을 가져옵니다.
      const accessToken = localStorage.getItem('accessToken');
  
      if (accessToken) {
        axios.get('http://3.38.32.91/sunflowerPlate/admin/restaurant/edit/', { // 실제 API 엔드포인트 URL로 교체하세요.
          headers: {
            "X-AUTH-TOKEN": accessToken,// 헤더에 토큰 추가
          }
        })
        .then(response => {
          console.log(response.data); //지워야함
          setRequests(response.data); // axios는 자동으로 JSON을 파싱합니다.
        })
        .catch(error => {
          console.error('Error fetching data:', error);
          // 오류 처리 로직을 추가할 수 있습니다.
        });
      } else {
        console.error('Access token is not available in local storage.');
        // 토큰이 없을 경우의 처리 로직을 추가할 수 있습니다.
      }
    }, []);

    const goToEditPage = (restaurantId) => {
      // navigate(`/store-regist/${restaurantId}`);
      navigate(`edit/${restaurantId}`);
    };
  
  return (
    <StMain>
      <Container>
        <Title>폐업/수정 요청 조회</Title>
        
        <DataSection>
          <StyledTable>
            <thead>
              <tr>
                <th>요청 ID</th>
                <th>요청 내용</th>
                <th>요청 날짜</th>
                <th>요청 처리</th>
              </tr>
            </thead>
            <tbody>
              {requests.map((request) => (
                <tr key={request.requestId}>
                  <td>{request.requestId}</td>
                  <td>{request.requestContent}</td>
                  <td>{request.requestAt}</td>
                  <td>
                  <span onClick={() => goToEditPage(request.restaurantId)}>수정</span>/
                    <span>삭제</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </StyledTable>
        </DataSection>
      </Container>
    </StMain>
  );
}

export default ClosurePage;

const Container = styled.div`
  padding: 20px;
  width: 50%;
  margin: 0 auto;
`;

const Title = styled.div`
  border: 1px solid #e0e0e0;
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
`;

const DataSection = styled.div`
  width: 100%;
  height: 800px;
  border: 1px solid #e0e0e0;
  overflow-x: auto;
`;

const StyledTable = styled.table`
  width: 100%;
  border-collapse: collapse;

  th, td {
    text-align: center;
    padding: 8px;
    border-bottom: 1px solid #ddd;
  }

  th {
    background-color: #f2f2f2;
  }

  tr:hover {
    background-color: #f5f5f5;
  }
`;

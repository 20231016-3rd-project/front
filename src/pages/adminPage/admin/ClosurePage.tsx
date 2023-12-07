import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { StMain } from '../../../components/Stmain';
import styled from 'styled-components';
import axios from 'axios';

interface Request {
  requestId: number;
  requestContent: string;
  requestAt: string;
  restaurantId: number;
}

  const ClosurePage: React.FC = () => {
    const [requests, setRequests] = useState<Request[]>([]);
    const navigate = useNavigate();
  
    useEffect(() => {
      const accessToken = localStorage.getItem('accessToken');
  
      if (accessToken) {
        axios.get<Request[]>('http://3.38.32.91/sunflowerPlate/admin/restaurant/edit/', {
          headers: {
            "X-AUTH-TOKEN": accessToken,
          }
        })
        .then(response => {
          setRequests(response.data);
        })
        .catch(error => {
          console.error('Error fetching data:', error);
        });
      } else {
        console.error('Access token is not available in local storage.');
      }
    }, []);

    const goToEditPage = (restaurantId: number) => {
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

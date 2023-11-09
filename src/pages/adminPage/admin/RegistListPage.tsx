import { useState, useEffect } from 'react';
import { StMain } from "../../../components/Stmain";
import styled from "styled-components";
import axios from 'axios';


const RegistListPage = () => {
  // 예제 데이터
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [restaurantData, setRestaurantData] = useState<any>({
    content: [],
    pageable: {},
    last: false,
    totalPages: 0,
    totalElements: 0,
    number: 0,
    first: false,
    sort: {},
    size: 0,
    numberOfElements: 0,
    empty: true,
  });

  useEffect(() => {
    const fetchRestaurants = async () => {
      try {
      const accessToken = localStorage.getItem('accessToken');
      console.log(accessToken); // 'accessToken'은 저장된 토큰의 키 이름입니다.
      if (!accessToken) {
        throw new Error('Access token not found');
      }
      

        const headers = {
          "X-AUTH-TOKEN": accessToken,
        };

        const response = await axios.get('http://3.38.32.91/sunflowerPlate/admin/restaurant', {
          headers
        });

        setRestaurantData(response.data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchRestaurants();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <StMain>
    <Container>
      <Title>식당등록조회</Title>
      
      <DataSection>
      <StyledTable>
        <thead>
          <tr>
              <th>ID</th>
              <th>이름</th>
              <th>주소</th>
              <th>웹사이트</th>
              <th>좋아요 수</th>
              <th>리뷰 수</th>
              <th>평균 별점</th>
              <th>운영 상태</th>
          </tr>
        </thead>
        <tbody>
           {restaurantData.content.map((restaurant) => (
            <tr key={restaurant.restaurantId}>
              <td>{restaurant.restaurantId}</td>
              <td>{restaurant.restaurantName}</td>
              <td>{restaurant.restaurantAddress}</td>
              <td><a href={restaurant.restaurantWebSite} target="_blank" rel="noopener noreferrer">웹사이트</a></td>
              <td>{restaurant.likeCount}</td>
              <td>{restaurant.reviewCount}</td>
              <td>{restaurant.avgStarRate}</td>
              <td>{restaurant.restaurantStatus}</td>
            </tr>
          ))}
        </tbody>
      </StyledTable>
      </DataSection>
      </Container>
    </StMain>
  );
};

export default RegistListPage;

// Styled-components를 사용하여 테이블 스타일 정의

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
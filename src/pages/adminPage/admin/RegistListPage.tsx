import { useState, useEffect } from 'react';
import { StMain } from "../../../components/Stmain";
import styled from "styled-components";
import axios from 'axios';

interface Restaurant {
  restaurantId: number;
  restaurantName: string;
  restaurantAddress: string;
  restaurantWebSite: string;
  likeCount: number;
  reviewCount: number;
  avgStarRate: number;
  restaurantStatus: string;
}

interface RestaurantData {
  content: Restaurant[];
  pageable: {
    // pageable 타입 정보 추가
  };
  last: boolean;
  totalPages: number;
  totalElements: number;
  number: number;
  first: boolean;
  sort: {
    // sort 타입 정보 추가
  };
  size: number;
  numberOfElements: number;
  empty: boolean;
}


const RegistListPage = () => {
  // 예제 데이터
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>('');
  const [restaurantData, setRestaurantData] = useState({
    content: [],
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

// pageable 상태 추가
  const [pageable, setPageable] = useState({
    sort: {
      empty: true,
      unsorted: true,
      sorted: false
    },
    offset: 0,
    pageNumber: 0,
    pageSize: 10,
    paged: true,
    unpaged: false
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
        setPageable(response.data.pageable); 
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchRestaurants();
  }, []);

  // 페이지 변경 핸들러
  const handlePageChange = async (pageNumber) => {
    try {
      setLoading(true);

      const accessToken = localStorage.getItem('accessToken');
      if (!accessToken) {
        throw new Error('Access token not found');
      }

      const headers = {
        "X-AUTH-TOKEN": accessToken,
      };

      const response = await axios.get(`http://3.38.32.91/sunflowerPlate/admin/restaurant?page=${pageNumber}`, {
        headers
      });

      setRestaurantData(response.data);
      setPageable(response.data.pageable);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

   // 페이지네이션 UI 렌더링
   const renderPagination = () => {
    let pages = [];
    for (let i = 0; i < restaurantData.totalPages; i++) {
      pages.push(
        <button key={i} onClick={() => handlePageChange(i)}>
          {i + 1}
        </button>
      );
    }
    return pages;
  };

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
        {renderPagination()}
      </StyledTable>
      </DataSection>
      {/* <Pagination>
          {renderPagination()}
        </Pagination> */}
      </Container>
    </StMain>
  );
};

export default RegistListPage;

// Styled-components를 사용하여 테이블 스타일 정의

const Container = styled.div`
  padding: 20px;
  width: 100%;
  margin: 0 auto;
  border: 1px solid #e0e0e0;
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
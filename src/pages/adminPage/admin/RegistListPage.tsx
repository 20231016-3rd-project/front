import { useState, useEffect } from 'react';
import { StMain } from "../../../components/Stmain";
import styled from "styled-components";
import { axiosInstance } from '../../../apis/axiosInstance/axiosInstance';



const RegistListPage = () => {
  const [restaurantData, setRestaurantData] = useState({ content: [], pageable: {}, totalPages: 0 });
  const [currentPage, setCurrentPage] = useState(0);

  useEffect(() => {
    fetchRestaurants(currentPage);
  }, [currentPage]);

  const fetchRestaurants = async (page) => {
    try {
      const response = await axiosInstance.get(`/sunflowerPlate/admin/restaurant?page=${page}`);
      setRestaurantData(response.data);
    } catch (error) {
      console.error('식당 데이터를 불러오는데 실패했습니다.', error);
    }
  };

  useEffect(() => {
    // 페이지 로드 시 첫 페이지의 데이터를 불러옵니다.
    fetchRestaurants(1);
  }, []);

  const handlePreviousClick = () => {
    setCurrentPage(currentPage - 1);
  };

  const handleNextClick = () => {
    setCurrentPage(currentPage + 1);
  };
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
      <Pagination>
          <button onClick={handlePreviousClick} disabled={currentPage === 0}>이전</button>
          <span>페이지 {currentPage + 1} / {restaurantData.totalPages}</span>
          <button onClick={handleNextClick} disabled={currentPage === restaurantData.totalPages - 1}>다음</button>
        </Pagination>
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

  td {
    a{
      color: darkblue;
      text-decoration: underline;
    }
  }
`;

const Pagination = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;

  button {
    margin: 0 10px;
  }
`;
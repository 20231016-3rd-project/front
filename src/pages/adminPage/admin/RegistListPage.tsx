import React from 'react';
import { StMain } from "../../../components/Stmain";
import styled from "styled-components";


const RegistListPage = () => {
  // 예제 데이터
  const restaurantList = [
    { name: '식당 A', phone: '010-1234-5678', address: '서울시 강남구', id: '1', registeredDate: '2023-01-01' },
    { name: '식당 B', phone: '010-2345-6789', address: '서울시 서초구', id: '2', registeredDate: '2023-01-02' },
    { name: '식당 C', phone: '010-2345-6789', address: '서울시 성동구', id: '3', registeredDate: '2023-01-03' },
    { name: '식당 D', phone: '010-2345-6789', address: '서울시 중구', id: '4', registeredDate: '2023-01-04' },
    { name: '식당 E', phone: '010-2345-6789', address: '서울시 관악구', id: '5', registeredDate: '2023-01-05' },
    { name: '식당 F', phone: '010-2345-6789', address: '서울시 송파구', id: '6', registeredDate: '2023-01-06' },
    // ... 더 많은 식당 데이터
  ];

  return (
    <StMain>
    <Container>
      <Title>식당등록조회</Title>
      
      <DataSection>
      <StyledTable>
        <thead>
          <tr>
            <th>식당 ID</th>
            <th>식당 이름</th>
            <th>식당 전화번호</th>
            <th>식당 주소</th>
            <th>등록된 날짜</th>
          </tr>
        </thead>
        <tbody>
          {restaurantList.map((restaurant) => (
            <tr key={restaurant.id}>
              <td>{restaurant.id}</td>
              <td>{restaurant.name}</td>
              <td>{restaurant.phone}</td>
              <td>{restaurant.address}</td>
              <td>{restaurant.registeredDate}</td>
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
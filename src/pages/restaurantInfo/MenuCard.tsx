import { Card, CardBody, CardHeader, Text } from '@chakra-ui/react';
import React from 'react';
import styled from 'styled-components';
interface MenuCardProps {
  restaurantMenuName: string;
  restaurantMenuPrice: string;
}

const MenuCard: React.FC<MenuCardProps> = ({
  restaurantMenuName,
  restaurantMenuPrice,
}) => {
  return (
    <Container>
      <div className="menu_name">{restaurantMenuName}</div>
      <div className="menu_price">{restaurantMenuPrice}원</div>
    </Container>
  );
};

export default MenuCard;

const Container = styled.div`
  display: flex;
  .menu_name {
    width: 100%;
    display: flex;
    justify-content: flex-start;
  }
  .menu_price {
    width: 100%;
    display: flex;
    justify-content: flex-end;
  }
`;

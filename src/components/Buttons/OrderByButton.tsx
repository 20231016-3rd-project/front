import React from 'react';
import styled from 'styled-components';

interface OwnProps {
  orderBy: string;
  standard: string;
  handleOrder?: (e) => void;
}
interface OrderProps {
  $orderBy: string;
  $standard: string;
}

const OrderByButton: React.FC<OwnProps> = ({
  orderBy,
  standard,
  handleOrder,
}) => {
  let text = '';
  switch (standard) {
    case 'rateDesc':
      text = '평점순';
      break;
    case 'review':
      text = '리뷰많은순';
      break;
    case 'like':
      text = '좋아요순';
      break;
  }
  return (
    <OrderButton
      $orderBy={orderBy}
      $standard={standard}
      value={standard}
      onClick={handleOrder}
    >
      {text}
    </OrderButton>
  );
};

export default OrderByButton;

const OrderButton = styled.button<OrderProps>`
  border-radius: 6px;
  background-color: transparent;
  font-size: 14px;
  font-weight: 600;
  letter-spacing: -0.7px;
  padding: 0.5rem 1rem;
  margin-right: 1rem;
  cursor: pointer;

  ${(props) =>
    props.$orderBy === props.$standard
      ? `  border: 1px solid #574204;
color: #574204;`
      : `  border: 1px solid #bab0a7;
color: #bab0a7;`}
`;

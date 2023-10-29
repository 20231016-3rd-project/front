import React from 'react';

interface OwnProps {
  orderBy: string;
  standard: string;
  handleOrder?: (e) => void;
}

const OrderByButton: React.FC<OwnProps> = ({
  orderBy,
  standard,
  handleOrder,
}) => {
  let text = '';
  switch (standard) {
    case 'rate':
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
    <button
      className={orderBy === standard ? 'order-btn-selected' : 'order-btn'}
      value={standard}
      onClick={handleOrder}
    >
      {text}
    </button>
  );
};

export default OrderByButton;

import React from 'react';

interface OwnProps {
  column: string;
  region: string;
  onClick?: (e) => void;
}

const DistrictSelectButton: React.FC<OwnProps> = ({
  column,
  region,
  onClick,
}) => {
  return (
    <button
      className={
        column === region ? 'district-item-btn-now' : 'district-item-btn'
      }
      value={region}
      onClick={onClick}
    >
      {region}
    </button>
  );
};

export default DistrictSelectButton;

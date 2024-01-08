import React from 'react';
import styled from 'styled-components';

interface OwnProps {
  column: string;
  region: string;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  name: string;
}
interface StyledProps {
  $column: string;
  $region: string;
  $name: string;
}

const DistrictSelectButton: React.FC<OwnProps> = ({
  column,
  region,
  onClick,
  name,
}) => {
  return (
    <DistrictButton
      $column={column}
      $region={region}
      $name={name}
      onClick={onClick}
      value={name}
    >
      {region}
    </DistrictButton>
  );
};

export default DistrictSelectButton;

const DistrictButton = styled.button<StyledProps>`
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: justify;
  justify-content: space-between;
  width: 100%;
  height: 100%;
  padding: 6px 12px 7px 14px;
  border-radius: 7px;
  font-size: 0.9375rem;
  letter-spacing: -0.0469rem;
  cursor: pointer;
  border: transparent;

  ${(props) =>
    props.$column === props.$name
      ? `color: rgb(255, 255, 255);
background-color: #da9d00;
font-weight: 500;`
      : `color: rgb(32, 32, 32);
background-color: transparent;`}
`;

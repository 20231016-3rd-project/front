import styled from 'styled-components';

export const Button = styled.button`
  align-items: center;
  background-color: #fff;
  border-radius: 24px;
  border-style: none;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.3);
  cursor: pointer;
  display: inline-flex;
  font-size: 14px;
  height: 40px;
  width: auto;
  justify-content: center;
  padding: 1px 20px;

  &:active {
    transform: scale(0.95); // 버튼이 눌렸을 때 약간 축소
  }
`;

export const InfoButton = styled.button`
  margin-right: 10px;
  align-items: center;
  background-color: #fff;
  border-radius: 24px;
  border-style: none;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.3);
  cursor: pointer;
  display: inline-flex;
  font-size: 14px;
  height: 40px;
  width: auto;
  justify-content: center;
  padding: 1px 20px;

  &:active {
    transform: scale(0.95); // 버튼이 눌렸을 때 약간 축소
  }
`;

export const RegistButton = styled.button`
  align-items: center;
  background-color: #fff;
  border-radius: 5px;
  border-style: none;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.3);
  cursor: pointer;
  display: inline-flex;
  font-size: 14px;
  height: 40px;
  width: auto;
  justify-content: center;
  padding: 1px 20px;
  font-weight: bold;

  &:hover {
    background-color: #f9b916; // hover 시 노란색으로 변경
  }

  &:active {
    transform: scale(0.95); // 버튼이 눌렸을 때 약간 축소
  }
`;

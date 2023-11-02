import React, { useRef } from 'react';
import useDetectClose from './../../hooks/useDetectClose';
import chevronDown from '/src/assets/images/chevronDown.svg';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

interface OwnProps {
  setAuth: React.Dispatch<React.SetStateAction<boolean>>;
  admin?: boolean;
  setAdmin?: React.Dispatch<React.SetStateAction<boolean>>;
}

interface IsOpenProps {
  $isopen: boolean; // prefix 로 "$" 를 사용하게 되면, props 가 실제 DOM 요소에 전달되는 것을 막는다.
}

const DropDown: React.FC<OwnProps> = ({ setAuth, admin, setAdmin }) => {
  const dropDownRef = useRef(null);
  const [isOpen, setIsOpen] = useDetectClose(dropDownRef, false);

  const logout = () => {
    setIsOpen(!isOpen);
    setAuth(false);
    if (setAdmin) setAdmin(false);
  };
  return (
    <DropDownBox>
      {admin && (
        <>
          <UserButton onClick={() => setIsOpen(!isOpen)}>
            햄토리 관리자님 <ArrowDown src={chevronDown} alt="" />
          </UserButton>

          <Menu $isopen={isOpen} ref={dropDownRef}>
            <MenuList>
              <StyledLink to="/mypage" onClick={() => setIsOpen(!isOpen)}>
                관리자페이지
              </StyledLink>
            </MenuList>
            <MenuList>
              <Logout onClick={logout}>로그아웃</Logout>
            </MenuList>
          </Menu>
        </>
      )}
      {!admin && (
        <>
          <UserButton onClick={() => setIsOpen(!isOpen)}>
            햄토리 회원님 <ArrowDown src={chevronDown} alt="" />
          </UserButton>
          <Menu $isopen={isOpen} ref={dropDownRef}>
            <MenuList>
              <StyledLink to="/mypage" onClick={() => setIsOpen(!isOpen)}>
                마이페이지
              </StyledLink>
            </MenuList>
            <MenuList>
              <Logout onClick={logout}>로그아웃</Logout>
            </MenuList>
          </Menu>
        </>
      )}
    </DropDownBox>
  );
};

export default DropDown;

const DropDownBox = styled.div`
  z-index: 100;
`;

const Menu = styled.ul<IsOpenProps>`
  background: #fff;
  border-radius: 8px;
  position: absolute;
  top: 60px;
  right: 2.3rem;
  width: 150px;
  text-align: center;
  box-shadow: 0 1px 8px rgba(0, 0, 0, 0.3);

  transition: opacity 0.4s ease, transform 0.4s ease, visibility 0.4s;
  padding: 10px;

  opacity: ${(props) => (props.$isopen ? 1 : 0)};
  visibility: ${(props) => (props.$isopen ? `visible` : `hidden`)};
  transform: ${(props) =>
    props.$isopen ? `translateY(0)` : `translateY(-20px)`};
  }
`;
const MenuList = styled.li`
  margin: 1rem 0;
`;

const UserButton = styled.button`
  border: none;
  min-width: 92px;
  background-color: white;
  font-size: 20px;
  font-weight: 500;
  cursor: pointer;
  margin-right: 2rem;
  min-width: 177px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const ArrowDown = styled.img`
  height: 30px;
  width: 30px;
`;

const StyledLink = styled(Link)`
  &:visited,
  &:link {
    text-decoration: none;
    color: black;
  }
`;
const Logout = styled.div`
  cursor: pointer;
`;

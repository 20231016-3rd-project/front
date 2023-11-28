import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import DropDown from './../../DropDown/DropDown';
import { useDispatch, useSelector } from 'react-redux';
import { ReducerType } from '../../../store/rootReducer';
import { setKeyword, setKey } from '../../../store/slices/keywordSlice';
import search from '@images/icon _search_.svg';
import { submitLogout } from '../../../pages/signIn/signinSlice';
import logo from '../../../assets/images/logo.png';

const Header: React.FC = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { isAuthenticated, isAdmin, userData } = useSelector((state: ReducerType) => state.auth);

  const handleLogout = async () => {
    try {
      // 로그아웃 작업이 완료되었으므로 이동 등의 추가 작업 수행
      navigate('/signin');
    } catch (error) {
      console.error('Error during logout', error);
    }
  };
  const handleAdminPage = () => {
    navigate('/mypage');
  };

  const handleUserSettings = () => {
    navigate('/mypage');
  };

  return (
    <Section>
      <HeaderLeft to="/">
        <Logo src={logo} alt="Logo" />
        <LogoText>
          <P>해바라기</P>
          <P>플레이트</P>
        </LogoText>
      </HeaderLeft>
      <HeaderMiddle>
        <SearchBox>
          <SearchInput
            type="text"
            placeholder="식당 또는 음식"
            // 여기서 검색 관련 로직을 구현합니다.
          />
          <SearchButton>Search</SearchButton>
        </SearchBox>
      </HeaderMiddle>
      <HeaderRight>
        {!isAuthenticated ? (
          <>
            <LoginButton onClick={() => navigate('/signin')}>로그인</LoginButton>
            <SignUpButton to="/signup">회원가입</SignUpButton>
          </>
        ) : (
          <>
            {isAdmin ? (
              <>
                <Button onClick={handleAdminPage}>관리자 페이지</Button>
                <Button onClick={handleLogout}>로그아웃</Button>
              </>
            ) : (
              <>
                <span>{userData?.nickname}님</span>
                <Button onClick={handleUserSettings}>회원정보 수정</Button>
                <Button onClick={handleLogout}>로그아웃</Button>
              </>
            )}
          </>
        )}
      </HeaderRight>
    </Section>
  );
};

export default Header;

// 스타일 컴포넌트 정의
const Section = styled.div`
  display: flex;
  justify-content: space-between;
  height: 85px;
`;
const HeaderLeft = styled(Link)`
  display: flex;
  align-items: center;
  margin-left: 1rem;
  text-decoration: none;
  color: black;
`;
const Logo = styled.img`
  height: 45px;
  width: 45px;
  cursor: pointer;
`;
const LogoText = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 5px;
  cursor: pointer;
`;
const P = styled.p`
  font-size: 14px;
`;
const HeaderMiddle = styled.div`
  display: flex;
  align-items: center;
`;
const SearchBox = styled.div`
  display: flex;
  align-items: center;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
`;
const SearchInput = styled.input`
  height: 37px;
  border: none;
  &:focus {
    outline: none;
  }
`;
const SearchButton = styled.button`
  height: 37px;
  border: none;
  background-color: #f9b916;
  color: white;
  cursor: pointer;
`;
const HeaderRight = styled.div`
  display: flex;
  align-items: center;
`;
const LoginButton = styled.button`
  background-color: white;
  font-size: 20px;
  cursor: pointer;
  margin-right: 3rem;
`;
const SignUpButton = styled(Link)`
  background-color: white;
  font-size: 20px;
  cursor: pointer;
  margin-right: 2rem;
  text-decoration: none;
  color: black;
`;
const Button = styled.button`
  background-color: white;
  cursor: pointer;
  margin-right: 1rem;
`;

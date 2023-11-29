import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import DropDown from './../../DropDown/DropDown';
import { useDispatch, useSelector } from 'react-redux';
import { ReducerType } from '../../../store/rootReducer';
import { setKeyword, setKey } from '../../../store/slices/keywordSlice';
import { submitLogout } from '../../../pages/signIn/signinSlice';
import logo from '../../../assets/images/logo.png';
import search from '../../../assets/images/ icon _search_.svg';

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
          <P>해바라기 플레이트</P>
          {/* <P>P l a t e</P> */}
        </LogoText>
      </HeaderLeft>

      <HeaderMiddle>
        <SearchBox>
          <SearchInput
            type="text"
            placeholder="식당 또는 음식"
            // 여기서 검색 관련 로직을 구현합니다.
          />
          <SearchButton>
            <img src={search} alt="" />
          </SearchButton>
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
  height: 60px;
  width: 60px;
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
  width: 500px;
  padding: 5px;
  border-radius: 30px;
  display: flex;
  align-items: center;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
`;
const SearchInput = styled.input`
  margin-left: 10px;
  height: 35px;
  width: 500px;
  border: none;
  &:focus {
    outline: none;
  }
`;
const SearchButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 37px;
  border: none;
  border-radius: 50px;
  background-color: #f9b916;
  color: white;
  cursor: pointer;

  &:active {
         transform: scale(0.97); 
        }
  img{
    width: 25px;
    height: 25px;
  }
`;
const HeaderRight = styled.div`
  display: flex;
  align-items: center;
`;
const LoginButton = styled.button`
  background: none;
  border: none;
  font-size: 1rem;
  cursor: pointer;
  margin-right: 2rem;
  text-decoration: none;
  color: black;
`;
const SignUpButton = styled(Link)`
  border: none;
  font-size: 1rem;
  cursor: pointer;
  margin-right: 2rem;
  text-decoration: none;
  color: black;
`;
const Button = styled.button`
  cursor: pointer;
  margin-right: 1rem;
`;

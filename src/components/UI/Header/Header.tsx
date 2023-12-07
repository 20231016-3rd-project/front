import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import DropDown from '../../DropDown/DropDown';
import { useDispatch, useSelector } from 'react-redux';
import { ReducerType } from '../../../store/rootReducer';
import { setKeyword, setKey } from '../../../store/slices/keywordSlice';
import { submitLogout } from '../../../pages/signIn/signinSlice';
import logo from '../../../assets/images/logo.png';
import search from '../../../assets/images/ icon _search_.svg';
import { setKeyword } from '../../../store/slices/keywordSlice';


const Header: React.FC = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const authState = useSelector((state: RootState) => state.auth);

  
  // authState가 정의되어 있지 않은 경우를 대비한 기본값 설정
  const { isAuthenticated = false, isAdmin = false, userData = null } = authState ?? {};
  

   const handleLogout = async () => {
    try {
      dispatch(submitLogout());
      navigate('/signin');
    } catch (error) {
      console.error('Error during logout', error);
    }
  };
``

  const handleAdminPage = () => {
    navigate('/mypage');
  };

  const handleUserSettings = () => {
    navigate('/mypage');
  };

  // 검색 기능 관련 상태 및 핸들러 추가
  const [searchKey, setSearchKey] = React.useState('');

  const handleSearchChange = (e) => {
    setSearchKey(e.target.value);
  };

  const handleSearchSubmit = () => {
    // 검색 관련 로직 구현
      dispatch(setKeyword(searchKey));
      navigate(`/detailpage`);
  
    console.log('Search for:', searchKey);
    // navigate('/searchResult', { state: { searchKey } });
  };

    // 드롭다운 메뉴 상태 관리
    const [showDropdown, setShowDropdown] = useState(false);

    const toggleDropdown = () => {
      setShowDropdown(!showDropdown);
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
            value={searchKey}
            onChange={handleSearchChange}
          />
          <SearchButton onClick={handleSearchSubmit}>
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
                <NicknameButton onClick={toggleDropdown}>
                  {userData?.nickname}님
                </NicknameButton>
                {showDropdown && (
                  <DropdownMenu>
                    <DropdownItem onClick={handleUserSettings}>회원정보 수정</DropdownItem>
                    <DropdownItem onClick={handleLogout}>로그아웃</DropdownItem>
                  </DropdownMenu>
                )}
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


const NicknameButton = styled.button`
  background-color: white;
  cursor: pointer;
  // 추가적인 스타일링
`;

const DropdownMenu = styled.div`
  position: absolute;
  top: 100%; // 헤더 바로 아래에 위치하도록 설정
  right: 0;
  background-color: white;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  z-index: 1;
  // 추가적인 스타일링
`;

const DropdownItem = styled.div`
  padding: 12px 16px;
  cursor: pointer;
  &:hover {
    background-color: #f1f1f1;
  }
  // 추가적인 스타일링
`;
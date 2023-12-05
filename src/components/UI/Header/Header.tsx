import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { submitLogout } from '../../../pages/signIn/signinSlice';
import logo from '../../../assets/images/logo.png';
import { setKeyword } from '../../../store/slices/keywordSlice';
import { RootState } from '../../../store/store';


const Header: React.FC = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const authState = useSelector((state: RootState) => state.signin);

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
          <P>해바라기</P>
          <P>플레이트</P>
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
          <SearchButton onClick={handleSearchSubmit}>Search</SearchButton>
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
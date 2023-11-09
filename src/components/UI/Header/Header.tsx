import React, { useEffect, useState } from 'react';
import logo from '/src/assets/images/sunflower.png';
import styled from 'styled-components';
import DropDown from './../../DropDown/DropDown';
import { Link, useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { ReducerType } from '../../../store/rootReducer';
import { setKeyword, setKey } from '../../../store/slices/keywordSlice';
const Header: React.FC = () => {
  const [auth, setAuth] = useState(false);
  const [admin, setAdmin] = useState(false);
  const navigate = useNavigate();
  const login = () => {
    navigate('/signin');
    setAuth(true);

    setAdmin(true);
  };

  const location = useLocation();
  const dispatch = useDispatch();

  const region = useSelector((state: ReducerType) => state.region.regionInfo);
  const keyword = useSelector((state: ReducerType) => state.keyword.keyword);
  const key = useSelector((state: ReducerType) => state.keyword.key);

  const onChangeKey = (e) => {
    dispatch(setKey(e.target.value));
  };
  const handleSubmit = () => {
    dispatch(setKeyword(key));
    navigate(`/detailpage`);
  };

  let headerContents;
  if (location.pathname === '/signup' || location.pathname === '/login') {
    headerContents = (
      <SectionCenter>
        <HeaderLeft to="/">
          <Logo src={logo} alt="" />
          <LogoText>
            <P>해바라기</P>
            <P>플레이트</P>
          </LogoText>
        </HeaderLeft>
      </SectionCenter>
    );
  } else {
    headerContents = (
      <Section>
        <HeaderLeft to="/">
          <Logo src={logo} alt="" />
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
              name="search"
              id="search"
              value={key}
              onChange={onChangeKey}
            />
            <SearchButton disabled={!key ? true : false} onClick={handleSubmit}>
              Search
            </SearchButton>
          </SearchBox>
        </HeaderMiddle>
        <HeaderRight>
          {!auth && (
            <>
              <LoginButton onClick={login}>로그인</LoginButton>
              <SignUpButton to="/signup">회원가입</SignUpButton>
            </>
          )}
          {auth && !admin && <DropDown setAuth={setAuth} />}
          {auth && admin && (
            <DropDown setAuth={setAuth} admin={admin} setAdmin={setAdmin} />
          )}
        </HeaderRight>
      </Section>
    );
  }

  return <>{headerContents}</>;
};

export default Header;

const Section = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  height: 85px;
`;
const SectionCenter = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  height: 85px;
`;
const HeaderLeft = styled(Link)`
  display: flex;
  align-items: center;
  letter-spacing: 3px;
  line-height: 20px;
  margin-left: 1rem;

  &:visited,
  &:link {
    text-decoration: none;
    color: black;
  }
`;
const P = styled.p`
  font-size: 14px;
  margin-left: 5px;
`;
const Logo = styled.img`
  height: 45px;
  width: 45px;
  cursor: pointer;
`;
const LogoText = styled.div`
  cursor: pointer;
`;
const HeaderMiddle = styled.div`
  display: flex;
  align-items: center;
`;
const SearchBox = styled.div`
  width: 710px;
  height: 57px;
  border: none;
  border-radius: 7px;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
`;
const SearchInput = styled.input`
  width: 540px;
  font-size: 1.2rem;
  height: 37px;
  border: none;
  line-height: 50px;
  &:focus {
    outline: none;
  }
`;
const SearchButton = styled.button`
  width: 142px;
  height: 37px;
  border: none;
  border-radius: 4px;
  font-size: 20px;
  font-weight: 700;
  color: white;
  background-color: #f9b916;
  cursor: pointer;
`;
const HeaderRight = styled.div`
  display: flex;
  align-items: center;
  letter-spacing: 2px;
`;
const LoginButton = styled.button`
  border: none;
  min-width: 92px;
  background-color: white;
  font-size: 20px;
  font-weight: 500;
  cursor: pointer;
  margin-right: 3rem;
`;
const SignUpButton = styled(Link)`
  border: none;
  min-width: 92px;
  background-color: white;
  font-size: 20px;
  font-weight: 500;
  cursor: pointer;
  margin-right: 2rem;

  &:visited,
  &:link {
    text-decoration: none;
    color: black;
  }
`;

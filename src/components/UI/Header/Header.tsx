import React, { useEffect, useState } from 'react';
import logo from '/src/assets/images/sunflower.png';
import styled from 'styled-components';
import DropDown from './../../DropDown/DropDown';
import { Link, useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { ReducerType } from '../../../store/rootReducer';
import { setKeyword, setKey } from '../../../store/slices/keywordSlice';
import search from '@images/🦆 icon _search_.svg';
const Header: React.FC = () => {
  const [auth, setAuth] = useState(false);
  const [admin, setAdmin] = useState(false);
  const navigate = useNavigate();
  const login = () => {
    navigate('/signin');
  };

  const location = useLocation();
  const dispatch = useDispatch();

  const key = useSelector((state: ReducerType) => state.keyword.key);

  const onChangeKey = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setKey(e.target.value));
  };
  const handleSubmit = () => {
    dispatch(setKeyword(key));
    navigate(`/detailpage`);
  };
  useEffect(() => {
    if (localStorage.getItem('nickName') === '관리자') {
      setAuth(true);
      setAdmin(true);
    } else if (localStorage.getItem('accessToken')) {
      setAuth(true);
    }
  }, [localStorage.getItem('accessToken')]);

  let headerContents;
  if (location.pathname === '/signup' || location.pathname === '/login') {
    headerContents = (
      <SectionCenter>
        <HeaderLeft to="/">
          <Logo src={logo} alt="" />
          <LogoText>
            <P>suflower plate</P>
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
            <P>suflower plate</P>
          </LogoText>
        </HeaderLeft>
        <HeaderMiddle>
          <SearchBox>
            <SearchInput
              type="text"
              placeholder="식당 또는 음식을 입력하세요"
              name="search"
              id="search"
              value={key}
              onChange={onChangeKey}
            />

            <SearchButton disabled={!key ? true : false} onClick={handleSubmit}>
              <img src={search} alt="search" />
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
  width: 40%;
  border: 1px solid blue;
  display: flex;
  align-items: center;
`;
const SearchBox = styled.div`
  border: 1px solid blue;
  width: 100%;
  height: 45px;
  border: none;
  border-radius: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
`;
const SearchInput = styled.input`
  width: 80%;
  font-size: 1rem;
  height: 30px;
  margin-left: 10px;
  border: none;
  /* line-height: 50px; */
  &:focus {
    outline: none;
  }
`;
const SearchButton = styled.button`
  width: 40px;
  height: 40px;
  border: none;
  border-radius: 35px;
  margin-left: 90px;
  font-size: 20px;
  font-weight: 700;
  color: white;
  background-color: #f9b916;
  cursor: pointer;

  img {
    margin-top: 3px;
    width: 20px;
    height: 20px;
  }
`;
const HeaderRight = styled.div`
  display: flex;
  align-items: center;
  letter-spacing: 2px;
`;
const LoginButton = styled.button`
  border: none;
  min-width: 92px;
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  background-color: white;
  margin-right: 3rem;
`;
const SignUpButton = styled(Link)`
  border: none;
  min-width: 92px;
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  margin-right: 2rem;

  &:visited,
  &:link {
    text-decoration: none;
    color: black;
  }
`;

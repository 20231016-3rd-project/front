import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <Section>
      <FirstRow>
        <Span>데이터 제휴 문의</Span>
        <Span>개인정보처리방침</Span>
        <Span>이용약관</Span>
        <Span>위치기반 서비스 이용약관</Span>
        <Span><Link to="/admin">관리자모드</Link></Span>
      </FirstRow>
      <MiddleRow>
        <Span>(주)해바라기플레이트</Span>
        <Span>소재지: 제1행성 지구본부 햄토리마을 사육장</Span>
      </MiddleRow>
      <MiddleRow>
        <Span>이메일문의: master@sunflowerplate.com</Span>
      </MiddleRow>
      <LastRow>
        <span>
          전화문의: 02-0000-0000 (평일: 10:00~19:00, 주말/공휴일 제외)
        </span>
        <span>Copyright @ 2023 sunflowerplate</span>
      </LastRow>
    </Section>
  );
};

export default Footer;

const Section = styled.div`
  height: 8rem;
  padding: 2rem 3rem;
  /* margin: 2rem 3rem; */
  font-size: 14px;
`;
const FirstRow = styled.div`
  margin-bottom: 2rem;
`;
const Span = styled.span`
  margin-right: 1.5rem;
  cursor: pointer;
  :hover {
    color: blue;
  }
`;
const MiddleRow = styled.div`
  margin-bottom: 1rem;
`;
const LastRow = styled.div`
  display: flex;
  justify-content: space-between;
`;

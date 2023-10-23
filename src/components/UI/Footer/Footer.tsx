import React from 'react';
import './Footer.css';

const Footer: React.FC = () => {
  return (
    <div className='footer'>
      <div className='first'>
        <span>데이터 제휴 문의</span>
        <span>계인정보처리방침</span>
        <span>이용약관</span>
        <span>위치기반 서비스 이용약관</span>
        <span>관리자모드</span>
      </div>
      <div className='middle'>
        <span>(주)해바라기플레이트</span>
        <span>소재지: 제1행성 지구본부 햄토리마을 사육장</span>
      </div>
      <div className='middle'>
        <span>이메일문의: master@sunflowerplate.com</span>
      </div>
      <div className='last'>
        <span>
          전화문의: 02-0000-0000 (평일: 10:00~19:00, 주말/공휴일 제외)
        </span>
        <span>Copyright @ 2023 sunflowerplate</span>
      </div>
    </div>
  );
};

export default Footer;

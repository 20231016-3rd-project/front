import React from 'react';
import logo from '/src/assets/images/sunflower.png';
import './Header.css';

const Header: React.FC = () => {
  return (
    <div className="head">
      <div className="header-left">
        <img className="logo" src={logo} alt="" />
        <div>
          <p>해바라기</p>
          <p>플레이트</p>
        </div>
      </div>

      <div className="header-middle">
        <div className="search-box">
          <input type="text" placeholder="지역, 식당 또는 음식" name="" id="" />
          <button>Search</button>
        </div>
      </div>

      <div className="header-right">
        <button className="login">로그인</button>
        <button className="signup">회원가입</button>
      </div>
    </div>
  );
};

export default Header;

import React from 'react';
import styled from 'styled-components';
import { darken } from 'polished';

const UploadPhoto = () => {
  return (
    <UploadPhotoStyle>
      <div className="header">리뷰를 작성해주세요</div>
      <div className="content">
        <div className="input-box">
          <button>내 사진 가져오기</button>
          <input type="file" name="" id="" />
        </div>
      </div>
    </UploadPhotoStyle>
  );
};

export default UploadPhoto;

const UploadPhotoStyle = styled.div`
  width: 400px;
  height: 500px;
  background-color: white;

  .header {
    padding-top: 1rem;
    padding-bottom: 0.75rem;
    display: flex;
    justify-content: center;
    text-align: center;
    font-size: 1rem;
    font-weight: bold;
    border-bottom: 1px solid grey;
  }
  .content {
    height: 100%;

    display: flex;
    justify-content: center;
    align-items: center;
  }
  .input-box {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    button {
      font-weight: bold;
      cursor: pointer;
      width: 100%;
      background-color: #f9b916;
      color: black;
      padding: 0.75rem;
      border-radius: 8px;
      border: none;
      &:hover {
        background-color: ${darken(0.1, '#f9b916')}; // hover 시 노란색으로 변경
      }
    }
    input {
      display: none;
    }
  }
`;

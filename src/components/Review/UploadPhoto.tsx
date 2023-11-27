import React from 'react';
import styled from 'styled-components';

const UploadPhoto = () => {
  return (
    <UploadPhotoStyle>
      <div className="header">리뷰작성</div>
      <div className="content"></div>
    </UploadPhotoStyle>
  );
};

export default UploadPhoto;

const UploadPhotoStyle = styled.div`
  width: 400px;
  height: 500px;
  background-color: white;

  .header {
    height: 40px;
    display: flex;
    text-align: center;
    font-size: 1rem;
    font-weight: bold;
  }
`;

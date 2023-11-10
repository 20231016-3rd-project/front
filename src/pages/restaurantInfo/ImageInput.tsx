import React, { useState } from 'react';
import styled from 'styled-components';

const ImageInput = ({ selectedFiles, setSelectedFiles }) => {
  
  console.log(selectedFiles);
  const handleFileChange = (e) => {
    const files = e.target.files;
    console.log(files);
    let allFilesValid = true;

    if (files.length > 3) {
      alert('파일을 3개까지 선택할 수 있습니다.');
      allFilesValid = false;
    } else {
      // 선택된 파일을 상태로 저장
      setSelectedFiles(Array.from(files));
    }
    //크기 제한

    let totalSize = 0;
    const maxSize = 10 * 1024 * 1024; // 10MB

    for (const file of files) {
      totalSize += file.size;

      if (file.size > maxSize) {
        alert('파일 크기는 10MB를 초과할 수 없습니다.');
        allFilesValid = false;
        break;
      }
    }

    if (totalSize > maxSize * 3) {
      alert('선택한 파일의 총 크기는 30MB를 초과할 수 없습니다.');
      allFilesValid = false;
    }

    if (allFilesValid) {
      setSelectedFiles(Array.from(files));
      console.log('e.target.files:', files);
    } else {
      e.target.value = null; // 파일 선택 취소
    }
  };

  return (
    <div>
      <input type="file" multiple onChange={handleFileChange} />
      <ImagePreviewStyle>
        {selectedFiles.map((file, index) => {
          return (
            <div key={index}>
               <img
                src={URL.createObjectURL(file)}
                alt={`이미지 ${index}`}
                width="100"
              /> 
              {/* <li>{file?.name}</li> 형석 지움*/} 
            </div>
          );
          //todo :img미리보기
        })}
      </ImagePreviewStyle>
    </div>
  );
};

export default ImageInput;

const ImagePreviewStyle = styled.ul`
  display: flex;
  gap: 1rem;
  margin: 1rem;
  width: 400px;
  height: 100px;
`;

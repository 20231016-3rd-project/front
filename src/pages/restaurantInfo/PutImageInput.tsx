import { before } from 'node:test';
import React, { useState } from 'react';
import styled from 'styled-components';

// [
//   {
//       "reviewImageId": 9,
//       "reviewOriginName": "local_image - 복사본 (2).jpg",
//       "reviewStoredName": "0ea513ca-40ad-42e3-aa8d-35c2da6367ac.jpg",
//       "reviewResizeStoredName": "resized_0ea513ca-40ad-42e3-aa8d-35c2da6367ac.jpg",
//       "reviewOriginUrl": "https://plate-review-img.s3.ap-northeast-2.amazonaws.com/0ea513ca-40ad-42e3-aa8d-35c2da6367ac.jpg",
//       "reviewResizeUrl": "https://plate-review-img.s3.ap-northeast-2.amazonaws.com/resized_0ea513ca-40ad-42e3-aa8d-35c2da6367ac.jpg"
//   },
//   {
//       "reviewImageId": 10,
//       "reviewOriginName": "local_image - 복사본.jpg",
//       "reviewStoredName": "a1e6664c-ebf6-45a2-b7fa-7056260872ee.jpg",
//       "reviewResizeStoredName": "resized_a1e6664c-ebf6-45a2-b7fa-7056260872ee.jpg",
//       "reviewOriginUrl": "https://plate-review-img.s3.ap-northeast-2.amazonaws.com/a1e6664c-ebf6-45a2-b7fa-7056260872ee.jpg",
//       "reviewResizeUrl": "https://plate-review-img.s3.ap-northeast-2.amazonaws.com/resized_a1e6664c-ebf6-45a2-b7fa-7056260872ee.jpg"
//   }
// ]

const PutImageInput = ({ selectedFiles, setSelectedFiles }) => {
  console.log(selectedFiles);
  const extractServerFile = (selectedFiles) => {
    return selectedFiles.filter((item) => item.reviewImageId !== undefined);
  };
  const handleFileChange = (e) => {
    const files = e.target.files;
    const filesArray = Array.from(files).map((file) => {
      return {
        reviewOriginName: file?.name,
        reviewResizeUrl: URL.createObjectURL(
          new Blob([file], { type: 'image/*' })
        ),
        file: file,
      };
    });
    const testArray = [...selectedFiles, ...filesArray];
    let allFilesValid = true;

    if (testArray?.length > 3) {
      alert('파일을 3개까지 선택할 수 있습니다.');
      allFilesValid = false;
    }

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

    if (allFilesValid) {
      setSelectedFiles(testArray);
      console.log('e.target.files:', files);
    } else {
      e.target.files = null;
      setSelectedFiles(extractServerFile(testArray)); // 파일 선택 취소
    }
  };

  return (
    <div>
      <input type="file" multiple onChange={handleFileChange} />
      <ImagePreviewStyle>
        {selectedFiles.length > 0 &&
          selectedFiles.map((file, index) => {
            return (
              <div key={index}>
                <img
                  src={file.reviewResizeUrl}
                  alt={`이미지 ${index}`}
                  width="100"
                  height="70"
                />
                <li>{file?.reviewOriginName}</li>
                <button onClick={() => {}}>삭제</button>
              </div>
            );
            //todo :img미리보기
          })}
      </ImagePreviewStyle>
    </div>
  );
};

export default PutImageInput;

const ImagePreviewStyle = styled.ul`
  display: flex;
  gap: 1rem;
  margin: 1rem;
  width: 400px;
  height: 100px;
`;

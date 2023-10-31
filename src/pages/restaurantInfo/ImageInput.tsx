import React, { useState } from 'react';

const ImageInput = () => {
  const [selectedFiles, setSelectedFiles] = useState([]);

  const handleFileChange = (e) => {
    const files = e.target.files;
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
    } else {
      e.target.value = null; // 파일 선택 취소
    }
  };

  return (
    <div>
      <input type="file" multiple onChange={handleFileChange} />
      <ul>
        {selectedFiles.map((file, index) => {
          return <li key={index}>{file.name}</li>;
          //todo :img미리보기
        })}
      </ul>
    </div>
  );
};

export default ImageInput;
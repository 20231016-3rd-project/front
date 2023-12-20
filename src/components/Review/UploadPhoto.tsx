import React, { ChangeEvent, useRef } from 'react';
import styled from 'styled-components';
import { darken } from 'polished';
import { useToast } from '@chakra-ui/react';

interface UploadPhotoProps {
  selectedFiles: File[];
  setSelectedFiles: React.Dispatch<React.SetStateAction<File[]>>;
  setIndex: React.Dispatch<React.SetStateAction<number>>;
}

const UploadPhoto: React.FC<UploadPhotoProps> = ({
  setSelectedFiles,
  setIndex,
}) => {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const toast = useToast();

  const isImageFile = (file: File): boolean => {
    const allowedExtensions = ['jpg', 'jpeg', 'png', 'gif'];

    const fileNameParts = file.name.split('.');
    const fileExtension = fileNameParts[fileNameParts.length - 1].toLowerCase();

    return allowedExtensions.includes(fileExtension);
  };
  const handleFileInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    let allFilesValid = true;
    if (!files) return;

    if (files) {
      const nonImageFiles = Array.from(files).filter(
        (file) => !isImageFile(file)
      );
      if (nonImageFiles.length > 0) {
        // 이미지 파일이 아닌 파일이 존재하는 경우
        toast({
          title: '이미지 파일만 선택 가능합니다.',
          status: 'error',
          duration: 4000,
          isClosable: true,
          position: 'top',
        });
      }
    }
    if (files?.length > 3) {
      toast({
        title: '파일을 3개까지 선택할 수 있습니다.',
        status: 'error',
        duration: 4000,
        isClosable: true,
        position: 'top',
      });
      allFilesValid = false;
      // } else {
      //   setInputFiles(Array.from(files));
    }
    let totalSize = 0;
    const maxSize = 10 * 1024 * 1024;
    for (const file of files) {
      totalSize += file.size;

      if (file.size > maxSize) {
        toast({
          title: '파일 크기는 10MB를 초과할 수 없습니다.',
          status: 'error',
          duration: 4000,
          isClosable: true,
          position: 'top',
        });
        allFilesValid = false;
        break;
      }
    }

    if (allFilesValid) {
      setSelectedFiles(Array.from(files));
      setIndex(1);
      console.log('e.target.files: 업로드', files);
    } else {
      toast({
        title: '다시 업로드해 주세요.',
        status: 'error',
        duration: 4000,
        isClosable: true,
        position: 'top',
      });
    }
  };

  return (
    <UploadPhotoStyle>
      <div className="header">리뷰를 작성해주세요</div>
      <div className="content">
        <div className="input-box">
          <button onClick={() => fileInputRef?.current?.click()}>
            내 사진 가져오기
          </button>
          <input
            type="file"
            multiple
            name=""
            id=""
            ref={fileInputRef}
            onChange={handleFileInputChange}
          />
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

import React, { useEffect } from 'react';
import styled from 'styled-components';
import {
  Collapse,
  Image,
  VisuallyHiddenInput,
  useDisclosure,
} from '@chakra-ui/react';

import {
  AddIcon,
  ArrowDownIcon,
  ArrowUpIcon,
  CloseIcon,
} from '@chakra-ui/icons';
import { Box, IconButton } from '@chakra-ui/react';
import WriteReviewText from './WriteReviewText';
import AddImageButton from './AddImageButton';
import PutAddImageButton from './PutAddImageButton';
type ImageObjType = {
  reviewImageId: number;
  reviewOriginName: string;
  reviewStoredName: string;
  reviewResizeStoredName: string;
  reviewOriginUrl: string;
  reviewResizeUrl: string;
};

interface UploadPhotoProps {
  selectedFiles: ImageObjType[];
  setSelectedFiles: React.Dispatch<React.SetStateAction<any[]>>;
  setIndex: React.Dispatch<React.SetStateAction<number>>;
  index: number;
  content: string;
  setContent: React.Dispatch<React.SetStateAction<string>>;
  rating: number | null;
  setRating: React.Dispatch<React.SetStateAction<number | null>>;
  handleSubmit: () => void;
  newFiles: File[];
  setNewFiles: React.Dispatch<React.SetStateAction<File[]>>;
  setDeletedFiles: React.Dispatch<React.SetStateAction<any[]>>;
}

const PutViewAndUploadPhoto: React.FC<UploadPhotoProps> = ({
  selectedFiles,
  setSelectedFiles,
  setIndex,
  index,
  content,
  setContent,
  rating,
  setRating,
  handleSubmit,
  newFiles,
  setNewFiles,
  setDeletedFiles,
}) => {
  // useEffect(() => {
  //   if (selectedFiles.length === 0) {
  //     setIndex(1);
  //   }
  // }, [selectedFiles]);
  const { isOpen, onToggle } = useDisclosure();
  console.log('ccc', setRating);

  const deleteImageHandler = (indexToRemove: number) => {
    setSelectedFiles((prevArray) =>
      prevArray.filter((file, index) => {
        if (index === indexToRemove)
          setDeletedFiles((state) => [...state, file]);
        return index !== indexToRemove;
      })
    );
  };
  const deleteNewImageHandler = (indexToRemove: number) => {
    setNewFiles((prevArray) =>
      prevArray.filter((_, index) => {
        return index !== indexToRemove;
      })
    );
  };
  return (
    <ViewAndUploadPhotoStyle>
      {index === 1 && <div className="header">사진을 확인해주세요</div>}
      {index === 2 && (
        <div className="header">
          <div>리뷰를 작성해주세요</div>
          <IconButton
            aria-label="next"
            icon={<ArrowUpIcon boxSize={'24px'} color={'white'} />}
            size={'32px'}
            onClick={() => {
              setIndex(1);
              onToggle();
            }}
            pos={'absolute'}
            right={'10'}
            bgColor={'grey'}
          />
        </div>
      )}
      <Collapse
        in={!isOpen}
        transition={{ exit: { duration: 0.5 }, enter: { duration: 0.5 } }}
      >
        <Box
          display={'grid'}
          gridTemplateColumns={'repeat(2, 1fr)'}
          gridTemplateRows={'repeat(2, 1fr)'}
          gap={4}
        >
          {selectedFiles.map((file, index) => {
            return (
              <Box
                pos={'relative'}
                display={'flex'}
                justifyContent={'center'}
                alignItems={'center'}
                key={index}
              >
                <IconButton
                  aria-label="delete image"
                  icon={<CloseIcon />}
                  color={'white'}
                  bgColor={'black'}
                  size={'sm'}
                  pos={'absolute'}
                  right={'2'}
                  top={'1'}
                  borderRadius={'xl'}
                  onClick={() => {
                    deleteImageHandler(index);
                  }}
                />
                <Image
                  key={index}
                  borderRadius={'2xl'}
                  src={file.reviewResizeUrl}
                  h={'180px'}
                  w={'220px'}
                />
              </Box>
            );
          })}
          {newFiles.length > 0 &&
            newFiles.map((file, index) => {
              return (
                <Box
                  pos={'relative'}
                  display={'flex'}
                  justifyContent={'center'}
                  alignItems={'center'}
                  key={index}
                >
                  <IconButton
                    aria-label="delete image"
                    icon={<CloseIcon />}
                    color={'white'}
                    bgColor={'black'}
                    size={'sm'}
                    pos={'absolute'}
                    right={'2'}
                    top={'1'}
                    borderRadius={'xl'}
                    onClick={() => {
                      deleteNewImageHandler(index);
                    }}
                  />
                  <Image
                    key={index}
                    borderRadius={'2xl'}
                    src={URL.createObjectURL(file)}
                    h={'180px'}
                    w={'220px'}
                  />
                </Box>
              );
            })}
          {selectedFiles.length + newFiles.length < 3 && (
            <PutAddImageButton
              newFiles={newFiles}
              setNewFiles={setNewFiles}
              selectedFiles={selectedFiles}
              setSelectedFiles={setSelectedFiles}
            />
          )}
          {index === 1 && (
            <IconButton
              aria-label="next"
              icon={<ArrowDownIcon boxSize={'80px'} />}
              size={'140px'}
              onClick={() => {
                setIndex(2);
                onToggle();
              }}
            />
          )}
          {/* {index === 2 && (
            <IconButton
              aria-label="next"
              icon={<ArrowUpIcon boxSize={'80px'} />}
              size={'140px'}
              onClick={() => {
                setIndex(1);
                onToggle();
              }}
            />
          )} */}
        </Box>
      </Collapse>
      <Collapse
        in={isOpen}
        transition={{ exit: { duration: 0.4 }, enter: { duration: 0.4 } }}
      >
        <WriteReviewText
          content={content}
          setContent={setContent}
          rating={rating}
          setRating={setRating}
          handleSubmit={handleSubmit}
        />
      </Collapse>
    </ViewAndUploadPhotoStyle>
  );
};

export default PutViewAndUploadPhoto;

const ViewAndUploadPhotoStyle = styled.div`
  width: 450px;
  height: 500px;
  background-color: white;
  display: flex;
  gap: 2rem;
  flex-direction: column;
  .header {
    padding-top: 1rem;
    padding-bottom: 0.75rem;
    display: flex;
    text-align: center;
    justify-content: center;
    font-size: 1rem;
    font-weight: bold;
    border-bottom: 1px solid grey;
    margin-bottom: 1rem;
  }
`;

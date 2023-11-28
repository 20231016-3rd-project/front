import React, { useEffect } from 'react';
import styled from 'styled-components';
import { Collapse, Image, useDisclosure } from '@chakra-ui/react';

import {
  AddIcon,
  ArrowDownIcon,
  ArrowUpIcon,
  CloseIcon,
} from '@chakra-ui/icons';
import { Box, IconButton } from '@chakra-ui/react';
import WriteReviewText from './WriteReviewText';
interface UploadPhotoProps {
  selectedFiles: File[];
  setSelectedFiles: React.Dispatch<React.SetStateAction<File[]>>;
  setIndex: React.Dispatch<React.SetStateAction<number>>;
  index: number;
  content: string;
  setContent: React.Dispatch<React.SetStateAction<string>>;
  rating: number | null;
  setRating: React.Dispatch<React.SetStateAction<number | null>>;
  handleSubmit: () => void;
}

const ViewAndUploadPhoto: React.FC<UploadPhotoProps> = ({
  selectedFiles,
  setSelectedFiles,
  setIndex,
  index,
  content,
  setContent,
  rating,
  setRating,
  handleSubmit,
}) => {
  useEffect(() => {
    if (selectedFiles.length === 0) {
      setIndex(0);
    }
  }, [selectedFiles]);
  const { isOpen, onToggle } = useDisclosure();
  console.log('ccc', setRating);
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
              >
                <IconButton
                  key={index}
                  aria-label="delete image"
                  icon={<CloseIcon />}
                  color={'white'}
                  bgColor={'black'}
                  size={'sm'}
                  pos={'absolute'}
                  right={'2'}
                  top={'1'}
                  borderRadius={'xl'}
                />
                <Image
                  key={index}
                  borderRadius={'2xl'}
                  src={URL.createObjectURL(file)}
                />
              </Box>
            );
          })}
          {selectedFiles.length < 3 && (
            <IconButton
              aria-label="add more image"
              icon={<AddIcon boxSize={'80px'} />}
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

export default ViewAndUploadPhoto;

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

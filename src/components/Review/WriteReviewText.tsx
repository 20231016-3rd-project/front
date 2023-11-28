import {
  Box,
  Textarea,
  Collapse,
  useDisclosure,
  Button,
} from '@chakra-ui/react';
import React, { ChangeEvent, useState } from 'react';
import StarRating from '../Star/StarRating';

interface UploadPhotoProps {
  content: string;
  setContent: React.Dispatch<React.SetStateAction<string>>;
  rating: number | null;
  setRating: React.Dispatch<React.SetStateAction<number | null>>;
  handleSubmit: () => void;
}

const WriteReviewText: React.FC<UploadPhotoProps> = ({
  content,
  setContent,
  rating,
  setRating,
  handleSubmit,
}) => {
  const handleTextChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setContent(e.target.value);
  };
  console.log('ccc ', setRating);
  return (
    <Box display={'flex'} flexDirection={'column'} gap={8}>
      <Box
        minH={'300px'}
        p="8px"
        mt="4"
        bg="yellow.50"
        rounded="xl"
        shadow="md"
        display={'flex'}
        flexDirection={'column'}
        gap={4}
      >
        <StarRating rating={rating} setRating={setRating} />
        <Textarea
          value={content}
          onChange={handleTextChange}
          placeholder="사장님이 친절하세요"
          size="md"
          resize={'none'}
          minH={'200px'}
          overflowY={'auto'}
        />
      </Box>
      <Button
        colorScheme="yellow"
        variant={'solid'}
        isDisabled={rating === null || content === ''}
        onClick={handleSubmit}
      >
        제출하기
      </Button>
    </Box>
  );
};

export default WriteReviewText;

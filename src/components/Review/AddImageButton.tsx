import { AddIcon } from '@chakra-ui/icons';
import { IconButton, VisuallyHiddenInput, useToast } from '@chakra-ui/react';
import React, { ChangeEvent, useRef } from 'react';

interface AddImageButtonProps {
  selectedFiles: File[];
  setSelectedFiles: React.Dispatch<React.SetStateAction<File[]>>;
}

const AddImageButton: React.FC<AddImageButtonProps> = ({
  selectedFiles,
  setSelectedFiles,
}) => {
  const isImageFile = (file: File): boolean => {
    const allowedExtensions = ['jpg', 'jpeg', 'png', 'gif'];

    const fileNameParts = file.name.split('.');
    const fileExtension = fileNameParts[fileNameParts.length - 1].toLowerCase();

    return allowedExtensions.includes(fileExtension);
  };
  const maxLength = 3 - selectedFiles.length;
  const toast = useToast();
  const fileInputRef = useRef<HTMLInputElement>(null);

  // const [newFiles, setNewFiles] = useState<File[]>([]);
  const newFileChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
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
        allFilesValid = false;
      }
    }
    if (files?.length > maxLength) {
      toast({
        title: '이미지를 총 3개까지 선택할 수 있습니다.',
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
      setSelectedFiles((state: any) => [...state, ...Array.from(files)]);
      // setIndex(1);
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
    <>
      <IconButton
        aria-label="add more image"
        icon={<AddIcon boxSize={'80px'} />}
        size={'140px'}
        onClick={() => {
          fileInputRef?.current?.click();
        }}
      />
      <VisuallyHiddenInput
        type="file"
        multiple
        ref={fileInputRef}
        onChange={newFileChangeHandler}
      />
    </>
  );
};

export default AddImageButton;

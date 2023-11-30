import { AddIcon } from '@chakra-ui/icons';
import { IconButton, VisuallyHiddenInput } from '@chakra-ui/react';
import React, { useRef } from 'react';

const AddImageButton = () => {
  const fileInputRef = useRef<HTMLInputElement>(null);
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
      <VisuallyHiddenInput type="file" multiple ref={fileInputRef} />
    </>
  );
};

export default AddImageButton;

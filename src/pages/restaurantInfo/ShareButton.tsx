import React, { useState } from 'react';
import { InfoButton } from './Button';
import { FaShareNodes } from 'react-icons/fa6';
import { FaCheck } from 'react-icons/fa';
import { useLocation } from 'react-router-dom';
import { useToast, Button } from '@chakra-ui/react';

const ShareButton = () => {
  const toast = useToast();
  const [clicked, setClicked] = useState(false);
  const location = useLocation();
  const copyToClipboard = () => {
    // Create a temporary textarea element
    const textarea = document.createElement('textarea');
    textarea.value = window.location.href;
    document.body.appendChild(textarea);
    textarea.select();

    // Execute copy command
    document.execCommand('copy');

    // Remove the temporary textarea
    document.body.removeChild(textarea);
  };
  return (
    <Button
      borderRadius={'full'}
      onClick={() => {
        setClicked(true);
        console.log(window.location.href);
        copyToClipboard();
        toast({
          title: '클립보드에 복사되었습니다!',
          status: 'warning',
          duration: 4000,
          isClosable: true,
          position: 'top',
        });
      }}
    >
      {!clicked && <FaShareNodes size={16} />}
      {clicked && <FaCheck size={16} />}
    </Button>
  );
};

export default ShareButton;

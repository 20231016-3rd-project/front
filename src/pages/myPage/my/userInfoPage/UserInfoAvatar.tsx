import { AddIcon } from '@chakra-ui/icons';
import {
  Avatar,
  AvatarBadge,
  Box,
  VisuallyHiddenInput,
} from '@chakra-ui/react';
import React, { LegacyRef } from 'react';

type Props = {
  profileImage: string;
  imageFileRef: any;
  setProfileImage: React.Dispatch<React.SetStateAction<string>>;
  setFile: React.Dispatch<React.SetStateAction<File | null>>;
};

const UserInfoAvatar: React.FC<Props> = ({
  profileImage,
  imageFileRef,
  setProfileImage,
  setFile,
}) => {
  const fileChangeHandler = (e: any) => {
    console.log(e.target.files[0], 'test');
    setProfileImage(URL.createObjectURL(e.target.files[0]));
    setFile(e.target.files[0]);
  };
  return (
    <Box
      display={'flex'}
      justifyContent={'center'}
      width={'100%'}
      paddingRight={'20px'}
      paddingTop={'0px'}
    >
      <Avatar
        boxSize="8rem"
        src={profileImage}
        onClick={() => {
          imageFileRef?.current?.click();
        }}
        cursor={'pointer'}
      >
        <AvatarBadge
          borderColor="white"
          bgColor={'yellow.400'}
          boxSize="2.25em"
        >
          <AddIcon boxSize={'1.5em'} color={'white'} />
        </AvatarBadge>
      </Avatar>
      <VisuallyHiddenInput
        type="file"
        ref={imageFileRef}
        onChange={fileChangeHandler}
      />
    </Box>
  );
};

export default UserInfoAvatar;

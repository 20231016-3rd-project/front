import {
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
} from '@chakra-ui/react';
import React, { useEffect, useRef, useState } from 'react';
import { checkNickNameDuplicate } from '../../../../apis/signupApi/signupApi';

type CallbackType = (this: any, ...args: any[]) => void;

function useDebounce(callback: CallbackType, delay: number) {
  const debounceTimer = useRef<NodeJS.Timeout | null>(null);

  return function (this: any, ...args: any[]) {
    if (debounceTimer.current) {
      clearTimeout(debounceTimer.current);
    }

    debounceTimer.current = setTimeout(() => {
      callback.apply(this, args);
    }, delay);
  };
}

type ValidationObj = {
  isNickNameValid: boolean;
  isPhoneValid: boolean;
  isPasswordValid: boolean;
  isImageValid: boolean;
  areAllValid: boolean;
};
type Props = {
  nickName: string;
  originNickName: string;
  setNickName: React.Dispatch<React.SetStateAction<string>>;
  setvalidationObj: React.Dispatch<React.SetStateAction<ValidationObj>>;
};

const UserNickName: React.FC<Props> = ({
  nickName,
  originNickName,
  setNickName,
  setvalidationObj,
}) => {
  const [isUniqueNickName, setIsUniqueNickName] = useState(false);

  //validate nick name
  const validateNickName = (nickName: string) => {
    console.log('[CHECK NICKNAME]', nickName, originNickName);
    if (nickName === originNickName) {
      setvalidationObj((state) => ({ ...state, isNickNameValid: true }));
    } else if (!isUniqueNickName) {
      console.log('debounce unique');
      setvalidationObj((state) => ({ ...state, isNickNameValid: true }));
    } else {
      setvalidationObj((state) => ({ ...state, isNickNameValid: false }));
    }
    console.log('debounce isnick');
  };

  const delayedCheck = useDebounce(async (nickName: string) => {
    const response = await checkNickNameDuplicate(nickName).then((r) => {
      setIsUniqueNickName(r);
      console.log('debounce getnick', r);
      return r;
    });
    await validateNickName(nickName);
  }, 300);
  useEffect(() => {}, [nickName, isUniqueNickName]);
  return (
    <FormControl
      isInvalid={nickName !== originNickName && !isUniqueNickName}
      marginBottom={'1.5rem'}
    >
      <FormLabel>닉네임</FormLabel>
      <Input
        type="string"
        size="md"
        value={nickName}
        onChange={(e) => {
          setNickName(e.target.value);
          delayedCheck(e.target.value);
        }}
      />
      {nickName !== originNickName && !isUniqueNickName && (
        <FormErrorMessage>중복된 닉네임입니다.</FormErrorMessage>
      )}
    </FormControl>
  );
};

export default UserNickName;

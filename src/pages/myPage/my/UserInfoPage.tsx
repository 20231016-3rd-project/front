import {
  Box,
  Button,
  Input,
  VStack,
  FormLabel,
  FormControl,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Text,
  HStack,
  useToast,
} from '@chakra-ui/react';
import { LegacyRef, useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { getMyProfile, putMyProfile } from '../../../apis/profileApi';
import Modal from '../../../components/Modal/Modal';
import { AddIcon } from '@chakra-ui/icons';
import { checkNickNameDuplicate } from '../../../apis/signupApi/signupApi';
import UserInfoAvatar from './userInfoPage/UserInfoAvatar';
import UserNickName from './userInfoPage/UserNickName';
type ValidationObj = {
  isNickNameValid: boolean;
  isPhoneValid: boolean;
  isPasswordValid: boolean;
  isImageValid: boolean;
  areAllValid: boolean;
};
type Type = {
  isVisible: boolean;
  onClose: () => void;
};
const UserInfoPage: React.FC<Type> = ({ isVisible, onClose }) => {
  if (!isVisible) return null;
  const imageFileRef = useRef<any>();
  const [originNickName, setOriginNickName] = useState('');
  const [nickName, setNickName] = useState('');

  const [validationObj, setvalidationObj] = useState<ValidationObj>({
    isNickNameValid: false,
    isPhoneValid: true,
    isPasswordValid: false,
    isImageValid: true,
    areAllValid: false,
  });
  console.log(validationObj);
  // 초깃값 가지고 있어야함 초기값과 같으면 ok
  //다르면 중복확인 해야하고 중복확인에서 ok 나와야 ok
  const [profileImage, setProfileImage] = useState('');
  //image여야하고
  const [file, setFile] = useState<File | null>(null);
  // image파일이어야 하고 용량제한이 있어야함
  const [phones, setPhones] = useState<string[]>([]);
  const [phone, setPhone] = useState('');
  //3개로 나눠야 함/ 모두 숫자
  const [password, setPassword] = useState('');
  //둘다 ''인데 같으면 ok , ''아니면 같아야하고 비밀번호 조건 맞아야함
  const [confirmedPassword, setConfirmedPassword] = useState('');

  useEffect(() => {
    getMyProfile().then((r) => {
      console.log(r);

      setNickName(r.nickName);
      setOriginNickName(r.nickName);
      setProfileImage(r.memberProfilePicture);
      setPhones(r.phone.split('-'));
    });
  }, []);
  // profile Image file

  const changeHandler = (e: any, setValue: (arg: any) => void) => {
    setValue(e.target.value);
  };

  // {
  //   "nickName": String,
  //   "password": String,
  //   "phone": String,
  //   "profileImage": Multipart/form-data
  // }
  const toast = useToast();
  const putProfileHandler = () => {
    const formdata = new FormData();
    // formdata.append(file)
    formdata.append('nickName', nickName);
    formdata.append('password', password);
    formdata.append('phone', phone);
    if (file !== null) formdata.append('profileImage', file);

    try {
      putMyProfile(formdata).then((r) => {
        toast({
          title: '회원정보가 수정되었습니다.',
          status: 'success',
          duration: 4000,
          isClosable: true,
          position: 'top',
        });
        return r;
      });
    } catch (error: any) {
      if (error.message) {
        toast({
          title: `${error.message}` ?? '회원정보 수정 실패',
          status: 'error',
          duration: 4000,
          isClosable: true,
          position: 'top',
        });
      }
    } finally {
      onClose();
    }
  };

  // check duplicate nickname

  //pw 조건
  const checkPassword = (pw: string) => {
    const regex = /^(?=.*[a-zA-Z])(?=.*\d)[a-zA-Z\d]{8,16}$/;
    return regex.test(pw);
  };
  useEffect(() => {
    console.log('[CHECK PASSWORD]');
    if (password === confirmedPassword && password === '')
      setvalidationObj((state) => ({ ...state, isPasswordValid: true }));
    else if (password === confirmedPassword && checkPassword(password))
      setvalidationObj((state) => ({ ...state, isPasswordValid: true }));
    else setvalidationObj((state) => ({ ...state, isPasswordValid: false }));
  }, [password, confirmedPassword]);

  // phone check
  useEffect(() => {
    console.log('[SET PHONE]');
    setPhone(phones.join('-'));
  }, [phones]);

  useEffect(() => {
    console.log('[CHECK ALL]');

    setvalidationObj((state) => ({
      ...state,
      areAllValid:
        state.isNickNameValid &&
        state.isPasswordValid &&
        state.isPhoneValid &&
        state.isImageValid,
    }));
  }, [nickName, phones, password, confirmedPassword, setvalidationObj]);
  return (
    // <ModalOverlay>
    //   <ModalContent>
    //     <CloseButton onClick={onClose}>X</CloseButton>
    <Modal closeModal={onClose}>
      <ModalContent>
        <Text
          fontSize={'large'}
          fontWeight={'bold'}
          paddingBottom={'1rem'}
          borderBottom={'1px'}
        >
          내 정보 수정
        </Text>
        <VStack
          width={'100%'}
          padding={10}
          display={'flex'}
          flexDirection={'column'}
          gap={4}
        >
          <UserInfoAvatar
            profileImage={profileImage}
            imageFileRef={imageFileRef}
            setProfileImage={setProfileImage}
            setFile={setFile}
          />
          <Box
            width={'100%'}
            margin={0}
            display={'flex'}
            flexDirection={'column'}
            gap={8}
          >
            <Tabs isFitted>
              <TabList>
                <Tab>기본정보</Tab>
                <Tab>비밀번호</Tab>
              </TabList>
              <TabPanels>
                <TabPanel>
                  <UserNickName
                    nickName={nickName}
                    originNickName={originNickName}
                    setNickName={setNickName}
                    setvalidationObj={setvalidationObj}
                  />
                  <FormControl>
                    <FormLabel>연락처</FormLabel>
                    <HStack>
                      <Input
                        size="md"
                        type="tel"
                        maxLength={3}
                        value={phones[0]}
                        onChange={(e) => {
                          const isValidPhoneNumber = /^\d+$/.test(
                            e.target.value
                          );
                          if (isValidPhoneNumber)
                            setPhones((state) => [
                              e.target.value,
                              state[1],
                              state[2],
                            ]);
                        }}
                      />
                      <Input
                        size="md"
                        type="tel"
                        maxLength={4}
                        value={phones[1]}
                        onChange={(e) => {
                          const isValidPhoneNumber = /^\d+$/.test(
                            e.target.value
                          );
                          if (isValidPhoneNumber)
                            setPhones((state) => [
                              state[0],
                              e.target.value,
                              state[2],
                            ]);
                        }}
                      />
                      <Input
                        size="md"
                        type="tel"
                        maxLength={4}
                        value={phones[2]}
                        onChange={(e) => {
                          const isValidPhoneNumber = /^\d+$/.test(
                            e.target.value
                          );
                          if (isValidPhoneNumber)
                            setPhones((state) => [
                              state[0],
                              state[1],
                              e.target.value,
                            ]);
                        }}
                      />
                    </HStack>
                  </FormControl>
                </TabPanel>
                <TabPanel>
                  <FormControl>
                    <FormLabel>새로운 비밀번호</FormLabel>
                    <Input
                      placeholder="새로운 비밀번호를 입력해주세요"
                      size="md"
                      marginBottom={'1.5rem'}
                      value={password}
                      onChange={(e) => {
                        changeHandler(e, setPassword);
                      }}
                    />
                  </FormControl>
                  <FormControl>
                    <FormLabel>비밀번호 확인</FormLabel>
                    <Input
                      placeholder="비밀번호를  다시 입력해주세요"
                      size="md"
                      value={confirmedPassword}
                      onChange={(e) => {
                        changeHandler(e, setConfirmedPassword);
                      }}
                    />
                  </FormControl>
                </TabPanel>
              </TabPanels>
            </Tabs>
          </Box>
          <Button
            width={'100%'}
            onClick={putProfileHandler}
            colorScheme="yellow"
            // isDisabled={!validationObj.areAllValid}
          >
            수정하기
          </Button>
        </VStack>
      </ModalContent>
    </Modal>
    // </ModalOverlay>
  );
};

export default UserInfoPage;

// const ModalOverlay = styled.div`
//   position: fixed;
//   top: 0;
//   left: 0;
//   width: 100%;
//   height: 100%;
//   background-color: rgba(0, 0, 0, 0.5);
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   z-index: 100;
// `;

const ModalContent = styled.div`
  background-color: white;
  width: 400px;
  height: 70%;
  padding: 10px;
  border-radius: 20px;
  /* box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.25); */

  /* div {
    margin-top: 0.5rem;
    text-align: center;
    font-size: 1.6rem;
    font-weight: bold;
  } */
`;

// const CloseButton = styled.div`;
//   float: right;
// `;

import {
  Box,
  Button,
  Circle,
  Image,
  Input,
  VStack,
  VisuallyHiddenInput,
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Text,
} from '@chakra-ui/react';
import { LegacyRef, useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { getMyProfile, putMyProfile } from '../../../apis/profileApi';
import Modal from '../../../components/Modal/Modal';

const UserInfoPage = ({ isVisible, onClose }) => {
  if (!isVisible) return null;
  const imageFileRef = useRef<LegacyRef<HTMLInputElement> | undefined>();

  const [nickName, setNickName] = useState('');
  const [profileImage, setProfileImage] = useState('');
  const [file, setFile] = useState(null);
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  useEffect(() => {
    getMyProfile().then((r) => {
      console.log(r);
      setNickName(r.nickName);
      setProfileImage(r.memberProfilePicture);
      setPhone(r.phone);
    });
  }, []);
  //박스만들고
  console.log(profileImage);

  // 최상단 프로필 사진
  const fileChangeHandler = (e) => {
    console.log(e.target.files[0], 'test');
    setProfileImage(URL.createObjectURL(e.target.files[0]));
    setFile(e.target.files[0]);
  };
  // 닉네임
  // 폰 번호

  //비밀번호 - > 확인 하는거 넣을거고/ 추가적으로 뭐 클릭하면 보이도록 설정..? 초기 값이 없으니까. 이거 빈값으로 가면 어떻게 되나?
  const changeHandler = (e, setValue) => {
    setValue(e.target.value);
  };

  // {
  //   "nickName": String,
  //   "password": String,
  //   "phone": String,
  //   "profileImage": Multipart/form-data
  // }

  const putProfileHandler = () => {
    const formdata = new FormData();
    // formdata.append(file)
    formdata.append('nickName', nickName);
    formdata.append('password', password);
    formdata.append('phone', phone);
    formdata.append('profileImage', file);

    putMyProfile(formdata);
  };

  //todo
  // 닉네임 중복확인
  // 핸드폰 번호 분리해서 받기

  // 닉네임, 비밀번호 validation

  //비밀번호 서로 같은지

  return (
    // <ModalOverlay>
    //   <ModalContent>
    //     <CloseButton onClick={onClose}>X</CloseButton>
    <Modal closeModal={onClose}>
      <ModalContent>
        <Text fontSize={'large'} fontWeight={'bold'} marginBottom={10}>
          내 정보 수정
        </Text>
        <VStack
          width={'100%'}
          padding={0}
          display={'flex'}
          flexDirection={'column'}
          gap={4}
        >
          <Box
            display={'flex'}
            justifyContent={'center'}
            width={'100%'}
            paddingRight={'20px'}
            paddingTop={'0px'}
          >
            <Image
              borderRadius="full"
              boxSize="90px"
              src={profileImage}
              onClick={() => {
                imageFileRef?.current?.click();
              }}
            />
            <VisuallyHiddenInput
              type="file"
              ref={imageFileRef}
              onChange={fileChangeHandler}
            />
          </Box>
          <Box margin={0} display={'flex'} flexDirection={'column'} gap={8}>
            <Tabs isFitted>
              <TabList>
                <Tab>기본정보</Tab>
                <Tab>비밀번호</Tab>
              </TabList>
              <TabPanels>
                <TabPanel>
                  <FormControl>
                    <FormLabel>닉네임</FormLabel>
                    <Input
                      type="string"
                      size="md"
                      value={nickName}
                      onChange={(e) => {
                        changeHandler(e, setNickName);
                      }}
                    />
                  </FormControl>
                  <FormControl>
                    <FormLabel>연락처</FormLabel>
                    <Input
                      size="md"
                      value={phone}
                      onChange={(e) => {
                        changeHandler(e, setPhone);
                      }}
                    />
                  </FormControl>
                </TabPanel>
                <TabPanel>
                  <FormControl>
                    <FormLabel>새로운 비밀번호</FormLabel>
                    <Input
                      placeholder="새로운 비밀번호를 입력해주세요"
                      size="md"
                      value={password}
                      onChange={(e) => {
                        changeHandler(e, setPassword);
                      }}
                    />
                  </FormControl>
                  <FormControl>
                    <FormLabel>비밀번호 확인</FormLabel>
                    <Input
                      placeholder="새로운 비밀번호를  다시 입력해주세요"
                      size="md"
                      value={password}
                      onChange={(e) => {
                        changeHandler(e, setPassword);
                      }}
                    />
                  </FormControl>
                </TabPanel>
              </TabPanels>
            </Tabs>
          </Box>
          <Button onClick={putProfileHandler}>수정하기</Button>
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
  min-width: 400px;
  max-width: 30%;
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

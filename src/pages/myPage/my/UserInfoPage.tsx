import {
  Box,
  Button,
  Circle,
  Image,
  Input,
  VStack,
  VisuallyHiddenInput,
} from '@chakra-ui/react';
import { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { getMyProfile, putMyProfile } from '../../../apis/profileApi';

const UserInfoPage = ({ isVisible, onClose }) => {
  if (!isVisible) return null;
  const imageFileRef = useRef();

  const [nickName, setNickName] = useState('');
  const [profileImage, setProfileImage] = useState('');
  const [file, setFile] = useState(null);
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  useEffect(() => {
    getMyProfile().then((r) => {
      console.log(r);
      setNickName(r.nickName);
      setProfileImage(r.memberProfileImage);
      setPhone(r.phone);
    });
  }, []);
  //박스만들고

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
  return (
    <ModalOverlay>
      <ModalContent>
        <CloseButton onClick={onClose}>X</CloseButton>
        <div>내 정보 수정</div>
        <VStack>
          <Box>
            <Image
              borderRadius="full"
              boxSize="60px"
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
          <Box>
            <Input
              placeholder="medium size"
              size="md"
              value={nickName}
              onChange={(e) => {
                changeHandler(e, setNickName);
              }}
            />
            <Input
              placeholder="medium size"
              size="md"
              value={phone}
              onChange={(e) => {
                changeHandler(e, setPhone);
              }}
            />
            <Input
              placeholder="medium size"
              size="md"
              value={password}
              onChange={(e) => {
                changeHandler(e, setPassword);
              }}
            />
          </Box>
          <Button onClick={putProfileHandler}>수정하기</Button>
        </VStack>
      </ModalContent>
    </ModalOverlay>
  );
};

export default UserInfoPage;

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 100;
`;

const ModalContent = styled.div`
  background-color: white;
  width: 30%;
  height: 60%;
  padding: 20px;
  border-radius: 20px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.25);

  div {
    color: ;
    margin-top: 20px;
    text-align: center;
    font-size: 1.6rem;
    font-weight: bold;
  }
`;

const CloseButton = styled.div`
  float: right;
`;

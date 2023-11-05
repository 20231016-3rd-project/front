import axios from 'axios';

import styled from 'styled-components';
import { StMain } from '../../../components/Stmain';
import DaumPost from '../../../components/Admin/DaumPost';
import { useState,ChangeEvent, FormEvent } from 'react';
import { IMenu, IAddressData} from '../admin/types/storeregist'


const StoreRegistPage = () => {
  const [businessName, setBusinessName] = useState<string>(""); // 식당이름
  const [tell, setTell] = useState<string>(""); //식당전화번호
  const [menus, setMenus] = useState<IMenu[]>([{ name: "", price: 0 }]); //식당메뉴
  const [files, setFiles] = useState<(File | null)[]>(Array(5).fill(null)); //이미지파일
  const [instagram, setInstagram] = useState<string>(""); // 웹사이트주소
  const [businessHours, setBusinessHours] = useState<string>(""); //영업시간
  const [addressData, setAddressData] = useState<IAddressData | null>(null); // 주소 

  const handleAddressSelect = (data: IAddressData) => {
    setAddressData(data);
  };

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>,  index: number) => {
    const newFiles = [...files]; 
    const file = e.target.files ? e.target.files[0] : null;
    newFiles[index] = file;
    setFiles(newFiles); 
  };

  const handleFileButtonClick = (index: number) => {
    const fileInput = document.getElementById(`fileInput-${index}`) as HTMLInputElement;
  fileInput?.click();
  };
  
  const addMenu = () => {
    setMenus([...menus, { name: "", price: 0 }]);
  };

  const handleMenuChange = (e: ChangeEvent<HTMLInputElement>, index: number) => {
  const { name, value } = e.target;
  const list = [...menus];

  if (name === 'price') {
    list[index].price = Number(value);
  } else {
    list[index][name as 'name'] = value;
  }
  
  setMenus(list);
};

  
const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault(); 
  
    console.log('Menus:', menus);
    console.log('Files:', files);
    console.log('Business Name:', businessName);
    console.log('Instagram:', instagram);
    console.log('Business Hours:', businessHours);
    console.log('Address Data:', addressData);
  
  };

  return (
    <StMain>
    <RegistContainer onSubmit={handleSubmit}>
      <MainTextBox>
        <h1>영업점등록</h1>ㅣ<span>당신의 식당을 등록하세요!</span>
      </MainTextBox>

      <ImageRegistSection>
  <h1>이미지등록</h1>
  {files.map((file, index) => ( // 여기서 file 변수를 추가했습니다.
    <div key={index}>
      <input 
        type="file"
        id={`fileInput-${index}`}
        style={{ display: 'none' }} // input을 숨깁니다.
        onChange={(e) => handleFileChange(e, index)} 
      />
      <input
        type="text"
        readOnly
        value={file ? file.name : ''} 
      />
      <button type="button" onClick={() => handleFileButtonClick(index)}>찾아보기</button>
    </div>
  ))}
</ImageRegistSection>

      <BusinessNameSection>
        <label>상호명</label>
        <input 
          type="text" 
          value={businessName}
          onChange={(e) => setBusinessName(e.target.value)}
        />
      </BusinessNameSection>

      <TellSection>
        <label>전화번호</label>
        <input 
          type="text" 
          value={tell}
          onChange={(e) => setTell(e.target.value)}
        />
      </TellSection>

      
     
      <DaumPost onAddressSelect={handleAddressSelect}/>
      
      <InstagramSection>
        <label>인스타그램</label>
        <input 
          type="text" 
          value={instagram}
          onChange={(e) => setInstagram(e.target.value)}
        />
      </InstagramSection>

      <HoursSection>
        <label>영업시간</label>
        <textarea 
          value={businessHours}
          onChange={(e) => setBusinessHours(e.target.value)}
        />
      </HoursSection>


      <MenuSection>
      <label>대표메뉴</label>
      <MenuScrollBox>
        {menus.map((menu, index) => (
          <div key={index}>
            <input 
              type="text" 
              name="name"
              placeholder="메뉴명"
              value={menu.name}
              onChange={e => handleMenuChange(e, index)}
            />
            <input 
              type="text" 
              name="price"
              placeholder="가격"
              value={menu.price}
              onChange={e => handleMenuChange(e, index)}
            />
          </div>
        ))}
        </MenuScrollBox>
        <button type="button" onClick={addMenu}>+</button>
        </MenuSection>

      <SubmitButton type="submit">최종완료</SubmitButton>
    </RegistContainer>
  </StMain>
  )
}

export default StoreRegistPage;

const RegistContainer = styled.form`
  width: 50%;
  border: 1px solid grey;
  padding: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const MainTextBox = styled.div`
  display: flex;
  margin-bottom: 20px;
  border: 1px solid red;
  width: 95%;
`;

const ImageRegistSection = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid red;
  width: 95%;
  margin-bottom: 5px;

  & > h1{
    margin-bottom: 5px;
  }

  & > div {  
    display: flex;

      input{
        width: 100%;
      }
      input[type="file"] {
        display: none;
        gap: 10px;
      }

      label {
        width: 90%;
        height: 20px;
        border: 1px solid green;
        display: flex;
        align-items: center;
        gap: 10px; 
        cursor: pointer; 
        margin-bottom: 10px;
      }
      
      button {
        width: 10%;
        height: 100%;
        border: 1px solid red;
        margin-bottom: 10px;
        cursor: pointer;
      }
    
}
`;

const TellSection = styled.div`
  border: 1px solid red;
  width: 95%;
  display: flex;
  flex-direction: column;
  margin-bottom: 15px;
  gap: 10px;
`;

const BusinessNameSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  border: 1px solid red;
  width: 95%;
  margin-bottom: 15px;
  
`;

const InstagramSection = styled.div`
border: 1px solid red;
width: 95%;
display: flex;
flex-direction: column;
margin-bottom: 15px;
gap: 10px;
  
`;

const HoursSection = styled.div`
border: 1px solid red;
display: flex;
flex-direction: column;
width: 95%;
height: 200px;
gap: 10px;
margin-bottom: 15px;
  

textarea{
  height: 100%;
  overflow-y: auto;
}
  
`;

const MenuSection = styled.div`
border: 1px solid red;
width: 95%;
margin-bottom: 15px;

input{
  width: 49.1%;
}

button{
  width: 100%;
  cursor: pointer;
}
`;

const MenuScrollBox = styled.div`
  margin-top: 5px;
  border: 1px solid green;
  height: 100px; /* 원하는 높이로 조정 */
  overflow-y: auto; /* 세로 스크롤 */

`;

const SubmitButton = styled.button`
border: 1px solid red;
width: 95%;
padding: 10px;
cursor: pointer;
`;








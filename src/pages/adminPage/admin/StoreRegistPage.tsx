import styled from 'styled-components';
import { StMain } from '../../../components/Stmain';
import DaumPost from '../../../components/Admin/DaumPost';


const StoreRegistPage = () => {
  


  return (
    <StMain>
    <RegistContainer>
      <MainTextBox>
        <h1>영업점등록</h1>ㅣ<span>당신의 식당을 등록하세요!</span>
      </MainTextBox>

      <ImageRegistSection>
          <h1>이미지등록</h1>
          <div>
            <input 
              type="file" 
              // onChange={}
              // value={}
            />
            <label htmlFor="fileInput"></label>
            <button type="button">찾아보기</button>
          </div>

          <div>
            <input 
              type="file" 
              // onChange={}
              // value={}
            />
            <label htmlFor="fileInput"></label>
            <button type="button">찾아보기</button>
          </div>

      </ImageRegistSection>

      <BusinessNameSection>
        <label>상호명</label>
        <input 
          type="text" 
          // value={}
          // onChange={}
        />
      </BusinessNameSection>

      
     
      <DaumPost/>
      
      <InstagramSection>
        <label>인스타그램</label>
        <input 
          type="text" 
          id="fileInput" 
          // value={}
          // onChange={}
        />
      </InstagramSection>

      <HoursSection>
        <label>영업시간</label>
        <textarea 
          // value={}
          // onChange={}
          // style={{ overflowY: 'auto' }} // 내부 스크롤
        />
      </HoursSection>


      <MenuSection>
        <label>대표메뉴</label>
          <div>
            <input 
              type="text" 
              placeholder="메뉴명"
              // value={}
              // onChange={}
            />
            <input 
              type="text" 
              placeholder="가격"
              // value={}
              // onChange={}
              />
          </div>
        <button type="button">+</button>
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
        border: 1px solid red;
        margin-bottom: 10px;
      }
    
}
`;

const BusinessNameSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  border: 1px solid red;
  width: 95%;
  margin-bottom: 15px;
  
`;

const AdressSection = styled.div `
  border: 1px solid red;
  width: 95%;
  margin-bottom: 15px;
   & > div { 
      margin-top: 10px;
      height: 100px;
      border: 1px solid blue;
    }
  
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

const SubmitButton = styled.button`
border: 1px solid red;
width: 95%;
padding: 10px;
cursor: pointer;
`;








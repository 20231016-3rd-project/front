import styled from 'styled-components';

export const RegistContainer = styled.form`
  width: 50%;
  padding: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1); //여기에 그림자를 추가했습니다.
`;

export const MainTextBox = styled.div`
  display: flex;
  margin-bottom: 20px;
  width: 95%;
  & > h1{
    font-size: 20px;
  }
  
  & > span{
    padding-top: 2px;
  }
`;

export const ImageRegistSection = styled.div`
  display: flex;
  flex-direction: column;
  width: 95%;
  margin-bottom: 5px;

  & > h1{
    margin-bottom: 5px;
  }

  & > div {  
    display: flex;
    gap:3px;

      input{
        width: 100%;
        margin-bottom: 10px;
        height: 24px;
      }
      input[type="file"] {
        display: none;
        height: 20px;
        margin-bottom: 10px;
      }

      label {
        width: 90%;
        height: 20px;
        display: flex;
        align-items: center;
        gap: 10px; 
        cursor: pointer; 
        margin-bottom: 10px;
      }
      
      button {
        width: 10%;
        height: 30px;
        margin-bottom: 10px;
        cursor: pointer;
      }
    
}
`;

export const TellSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 95%;
  margin-bottom: 15px;
  & > input{
    height: 24px;
  }
  
`;


export const BusinessNameSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 95%;
  margin-bottom: 15px;

  & > input{
    height: 24px;
  }
  
`;

export const AdressSection = styled.div `
  width: 95%;
  margin-bottom: 15px;
   & > div { 
      margin-top: 10px;
      height: 100px;
    }
  
`;

export const InstagramSection = styled.div`
width: 95%;
display: flex;
flex-direction: column;
margin-bottom: 15px;
gap: 10px;
& > input{
    height: 24px;
  }
  
`;

export const HoursSection = styled.div`
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

export const MenuSection = styled.div`
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

export const MenuScrollBox = styled.div`
  margin-top: 5px;
  height: 100px; /* 원하는 높이로 조정 */
  overflow-y: auto; /* 세로 스크롤 */
  border: 1px solid grey;

`;

export const SubmitButton = styled.button`
width: 95%;
padding: 10px;
cursor: pointer;
`;



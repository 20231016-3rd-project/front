import styled from 'styled-components';

export const RegistContainer = styled.form`
  width: 50%;
  border: 1px solid grey;
  padding: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const MainTextBox = styled.div`
  display: flex;
  margin-bottom: 20px;
  border: 1px solid red;
  width: 95%;
`;

export const ImageRegistSection = styled.div`
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

export const TellSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  border: 1px solid red;
  width: 95%;
  margin-bottom: 15px;
  
`;


export const BusinessNameSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  border: 1px solid red;
  width: 95%;
  margin-bottom: 15px;
  
`;

export const AdressSection = styled.div `
  border: 1px solid red;
  width: 95%;
  margin-bottom: 15px;
   & > div { 
      margin-top: 10px;
      height: 100px;
      border: 1px solid blue;
    }
  
`;

export const InstagramSection = styled.div`
border: 1px solid red;
width: 95%;
display: flex;
flex-direction: column;
margin-bottom: 15px;
gap: 10px;
  
`;

export const HoursSection = styled.div`
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

export const MenuSection = styled.div`
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

export const MenuScrollBox = styled.div`
  margin-top: 5px;
  border: 1px solid green;
  height: 100px; /* 원하는 높이로 조정 */
  overflow-y: auto; /* 세로 스크롤 */

`;

export const SubmitButton = styled.button`
border: 1px solid red;
width: 95%;
padding: 10px;
cursor: pointer;
`;



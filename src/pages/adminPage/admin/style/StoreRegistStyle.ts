import styled from 'styled-components';

export const RegistContainer = styled.form`
  padding: 20px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1); //여기에 그림자를 추가했습니다.
  border: 1px solid #e0e0e0;
`;

export const MainTextBox = styled.div`
  display: flex;
  margin-bottom: 20px;
  width: 100%;
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
    width: 100%;
    margin-bottom: 5px;

  label{
    margin-bottom: 10px;
  }
   div {  
    border: 1px solid #eee;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 20px;
    gap:3px;

      input{
        width: 100%;
        height: 24px;
      }
      input[type="file"] {
        display: none;
        height: 20px;
      }
      
      button {
        border: 1px solid #eee;
        width: 10%;
        height: 30px;
        cursor: pointer;
        background-color: #e0e0e0;
      }
    
}
`;

export const TellSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 100%;
  margin-bottom: 15px;
  & > input{
    height: 30px;
    border: 1px solid #eee;
  }
  
`;


export const BusinessNameSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 100%;
  margin-bottom: 15px;

  & > input{
    height: 30px;
    border: 1px solid #eee;
  }
  
`;

export const AdressSection = styled.div `
  width: 100%;
  margin-bottom: 15px;
   & > div { 
      margin-top: 10px;
      height: 100px;
    }
  
`;

export const InstagramSection = styled.div`
width: 100%;
display: flex;
flex-direction: column;
margin-bottom: 20px;
gap: 10px;
& > input{
    height: 30px;
    border: 1px solid #eee;
  }
  
`;

export const HoursSection = styled.div`
display: flex;
flex-direction: column;
width: 100%;
height: 200px;
gap: 10px;
margin-bottom: 15px;
  

textarea{
  height: 100%;
  overflow-y: auto;
  border: 1px solid #eee;
}
  
`;

export const MenuSection = styled.div`
width: 100%;


input{
  width: 49.1%;
  text-align: center;
  border: 1px solid #eee;
}

button{
  width: 100%;
  cursor: pointer;
  background-color: #e0e0e0;
  background-color: #e0e0e0;
}
`;

export const MenuScrollBox = styled.div`
  margin-top: 20px;
  height: 100px; /* 원하는 높이로 조정 */
  overflow-y: auto; /* 세로 스크롤 */
  border: 1px solid #e0e0e0;

`;

export const SubmitButton = styled.button`
border: 1px solid #e0e0e0;
width: 100%;
margin-top: 20px;
padding: 10px;
cursor: pointer;
background-color: #e0e0e0;
`;



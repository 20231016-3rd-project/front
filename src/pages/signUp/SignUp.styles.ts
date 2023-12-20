import styled from 'styled-components';

export const MainContainer = styled.div`
  height: 100vh;
  width: 100%;
  overflow: hidden; 
`;

export const GridContainer = styled.div`
  display: grid;
  grid-template-columns: 1.65fr 1fr; 
  height: 100%;
`;


export const VideoSection = styled.div`
 overflow: hidden; 
 position: relative;
 width: 100%;
 height: 100%;
video {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

h1{
  z-index: 100;
}
`;

export const OverlayText = styled.div`
  position: absolute;
  top: 50%; 
  left: 50%; 
  transform: translate(-50%, -50%); 
  color: white; 
  font-size: 30px; 
  font-weight: bold;
  text-align: center; 
`;



export const SignupForm = styled.form`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  

`;

export const FieldContainer = styled.div`
 display: flex;
 flex-direction: column;
 width: 75%;
 height: 70%;


 h1{
    font-size: 28px;
    margin-bottom: 20px;
    font-weight: bold;
  }
  a{

img{
margin-top: 20px;
width: 100%;
}

}

label{
margin-top: 20px;
font-size: 14px;
}
`;


export const Input = styled.input`
  margin: 10px 0px;
  margin-bottom: 10px;
  padding: 10px 0px; 
  width: 75%;
  border: 1px solid #ccc;
  background-color: transparent; 
  outline: none; 
  margin-right: 10px;

  &:focus {
    border-bottom: 2px solid #007bff; 
  }

`;

export const InputField = styled.div`
   width: 100%;
`;

export const InputPassword = styled.input`

  margin: 10px 0px;
  margin-bottom: 10px;
  padding: 10px 0px; 
  width: 100%;
  border: 1px solid #ccc;
  background-color: transparent; 
  outline: none;
  margin-right: 10px;

  &:focus {
    border-bottom: 2px solid #007bff; 
  }

`;

export const Button = styled.button`
  width: 110px;
  height: auto;
  padding: 10px;
  border: 1000px solid #FCD53F;
  background-color: #FCD53F;
  color: white;
  border: none;
  cursor: pointer;
  &:hover {
    background-color: #0056b3;
  }
`;


export const CheckButton = styled(Button)`
`;

export const ErrorMsg = styled.span`
  color: #6D4534;
`;


export const Label = styled.label`
  display: block;
  margin-bottom: 15px;
  color: #333;
  font-size: 0.9em;
`;

export const InputButtonContainer = styled.div`
  align-items: center;
  margin-bottom: 10px;
`;

export const PhoneFieldContainer = styled(FieldContainer)`
`;

export const PhoneInputContainer = styled.div`
 
`;

export const PhoneInputField = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const PhoneInput = styled.input`
  width: 33%;
  border: 1px solid blue;
  padding: 10px 0px; 
  margin-top: 5px; 
  border: 1px solid #ccc;
  margin: 0;
  text-align: center;
  &:not(:last-child) {
  margin-right: 10px;
  }
`;


export const SignUpButton = styled(Button)`
  width: 100%; 
  padding: 10px 0; 
  margin-top: 30px;
`;
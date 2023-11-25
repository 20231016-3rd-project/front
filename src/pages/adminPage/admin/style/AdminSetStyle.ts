import styled from "styled-components";

export const GridContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 5fr;
  height: 100vh;
  gap: 10px;
  color: white;
  padding: 20px;
  background-color: black;
`;

export const AdminNav = styled.div`
  border: 1px solid black;
  padding: 30px;
  text-align: center;
`;

export const LogoSection = styled.div`

  div{
    display: flex;
    align-items: center;
    gap: 5px;
    margin-right: 30px;
    margin-bottom: 50px;                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          px;
  }
  
  img{
    width: 40px;
    height:40px;
  }

  h1{
    font-size: 1rem;
  }
`;


export const LinkSection= styled.div`
  width: auto;
  height: auto;
  border: 1px solid red;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 30px;

img{
    width: 20px;
    height: 20px;
  }
  
`;

export const LinkBox = styled.div`
  display: flex;
  gap: 10px;
  margin-left: 5px;

  div {
    display: flex;
    width: 25px;
    height: 25px;
    background-color: white;
    align-items: center;
    justify-content: center;
  }

  p{
    display: flex;
    align-items: center;
  }
`;

export const AdminMain = styled.div`
  align-items: center;
  border: 1px solid black;
  height: 800px;
  padding: 20px;
  color: black;
  background-color: white;
  border-radius: 20px;
  
`;

export const AdminHeader = styled.div`
  width: 100%;
  height: 10%;
  border: 1px solid red ;
  display: grid;
  grid-template-columns: 1fr 1fr;
`;

export const TextBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  border: 1px solid blue;

  h1{
    font-size: 2rem;
    font-weight: 500;
    margin-bottom: 10px; 
  }
  p{
    font-size: 1.2rem;
  }
`;

export const ProfileBox = styled.div`
  border: 1px solid blue;
  border-radius: 10px;
  width: 60px;
  height: 60px;
  div{
    img{
    width: 100%;
    height: 100%;
    }
  }
  
`;

export const DashBoardSection = styled.div`
  width: 100%;
  height: 80%;
  border: 1px solid red;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr; 
  grid-template-rows: 2fr 1fr; 
  gap: 10px;
  grid-template-areas:
    "box1 box1 box2"
    "box3 box4 box5";

  @keyframes activeEffect {
  0%, 100% { transform: scale(1); } 
  50% { transform: scale(0.95); } 
}
  .box {
    padding: 20px;
    text-align: center;
    position: relative; 
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.3);
  }

  .box1 { 
    grid-area: box1;
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.3);

    .fruit-image{
        width: 800px;
        height: 500px;
        margin-left: 80px;
    }
    .AdminRE-image{
        position: absolute; 
        z-index: 100; 
        width: 350px;
        height: 200px;
        top: 40%; 
        right: 10%;
        animation: activeEffect 2s ease-in-out infinite;
        
    }
    .AdminRE2-image{
        position: absolute; 
        z-index: 120; 
        width: 120px;
        height: 50px;
        top: 40%; 
        right: 15%;
        animation: activeEffect 2s ease-in-out infinite;

    }
    button{
        z-index: 100px;
        position: absolute; 
        top: 65%; 
        left: 11%;
        z-index: 100; 
        color: white;
        font-size: 1rem;
        background-color: #f9b916;
        padding: 20px;
        border: none;
        border-radius: 30px;
        margin: 0;
        cursor: pointer;
        box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.3);
        animation: bounceZ 2s ease-in-out infinite; 

        &:active {
         transform: scale(0.97); 
        }
    }
}
  .box2 { 
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    grid-area: box2; 
  }
  .box3 { grid-area: box3; }
  .box4 { grid-area: box4; }
  .box5 { grid-area: box5; }
  
`;
export const BoxChatButton = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  text-align: center;
  border-radius: 30px;
  width: 130px;
  height: 40px;
  font-weight: bold;
  font-size: 1rem;
  background-color: #f9b916;
  color: white;
  padding: 10px;
  margin-bottom: 10px;
  cursor: pointer;
`;

export const ModeButton = styled.button`

`;
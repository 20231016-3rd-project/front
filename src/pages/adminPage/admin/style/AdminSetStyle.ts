import styled from "styled-components";

interface ToggleContainerProps {
  isDay: boolean;
}

export const MainContainer = styled.div`
   background-color: #ffdf6d;
   display: grid;
   width: 100vw;
   height: 100vh;
   padding: 30px;
`;

export const GridContainer = styled.div`
  display: grid;
  max-height: 100vh;
  gap: 15px;
  grid-template-columns: 1fr 5fr;
  color: white;
`;

export const AdminNavbar = styled.div`
  border-radius: 20px;
  padding: 30px;
  text-align: center;
  background-color: #f9b916;
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

//중요
export const AdminMain = styled.div<ToggleContainerProps>`
  align-items: center;
  padding: 20px;
  color: ${({ isDay }) => isDay ? 'black' : 'white'};
  background-color: ${({ isDay }) => isDay ? 'white' : '#333'};
  border-radius: 20px;
  
`;

export const AdminHeader = styled.div`
  width: 100%;
  height: 10%;
  display: grid;
  grid-template-columns: 1fr 1fr;
`;

export const TextBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  h1{
    font-size: 2rem;
    font-weight: 500;
  }
  p{
    font-size: 1.2rem;
    margin-bottom: 20px;
  }
`;

export const ProfileBox = styled.div`
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  .icon{
    background-color: white;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.3);
    color: white;
    width: 45px;
    height: 45px;
    border-radius: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 20px;
    cursor: pointer;

    img{
      width: 50%;
      height: 50%;
      color: white;
    }
  }

  .create{
    width: 80px;
    height: 45px;
    border-radius: 50px;
    font-size: 1rem;
    font-weight: bold;
    color: white;
    background-color: #f9b916;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 20px;
    cursor: pointer;
    h1{

    }
  }

  .profile{
    width: 60px;
    height: 60px;
    margin-right: 10px;
    img {
      width: 100%;
      height: 100%;
      border-radius: 50px;
      border: 4px solid #f9b916;
    }
  }
  
`;

export const DashBoardSection = styled.div`
    /* border: 1px solid red; */
`;

export const DashBoardContainer = styled.div`
  width: 100%;
  height: 90%;
  display: grid;
  gap: 10px;
  grid-template-columns: 1fr 1fr 1fr; 
  grid-template-rows: 2fr 1fr; 
  grid-template-areas:
    "box1 box1 box2"
    "box3 box3 box4";

  @keyframes activeEffect {
  0%, 100% { transform: scale(1); } 
  50% { transform: scale(0.95); } 
}
`;

export const Box1 = styled.div`
    grid-area: box1;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid #ccc;
    position: relative; 
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
`; 
export const Box2 = styled.div` 
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    grid-area: box2; 
    border: 1px solid #ccc;
  `;


export const Box3 = styled.div`
    grid-area: box3; 
    border: 1px solid #ccc;

    h1{
      font-size: 1.2rem;
      font-weight: bold;
      margin-top: 10px;
      margin-bottom: 50px;
    }

    .bestmap{
      display: flex;
      justify-content: space-between;
      gap: 20px;
      .best3{
      width: 30%;
      height: 80%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;

      img{
        width: 100px;
        height: 100px;
        border-radius: 50px;
        margin-bottom: 10px;
      }
    }
    }
  `;
  
  export const Box4 = styled.div`
    border: 1px solid #ccc;
    grid-area: box4;
    display: flex;
    gap: 10px;
    justify-content: center;
    align-items: center;
    img{
      width: 100px;
      height: 100px;
    }
`;

export const Box4Text = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h1{
    margin-bottom: 15px;
    font-size: 1.5rem;
  }

  p{
    font-size: 2rem;
    font-weight: bold;
  }
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

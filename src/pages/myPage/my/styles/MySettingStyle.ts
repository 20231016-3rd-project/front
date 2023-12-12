import styled from "styled-components";

export const Main =styled.div`
  width: 100%;
  height: 100vh;
  background-color: #e0e0e0;
  display: flex;
`;

export const Nav =styled.div`
width: 30%;
height: 100%;
border: 1px solid red;
padding: 6rem 3.2rem 0.8rem 0px;
`;

export const Body =styled.div`
width: 70%;
height: 100%;
border: 1px solid blue;
`;

export const InformationSection =styled.div`
width: 70%;
height: 100%;
border: 1px solid blue;
padding: 6rem 0px 1.6rem 6rem;
h3{
    font-size: 1.6rem;
    font-weight: bold;
    margin-bottom: 40px;
}

h4{
    font-size: 1.4rem;
    font-weight: bold;
    margin-bottom: 20px;
}
`;
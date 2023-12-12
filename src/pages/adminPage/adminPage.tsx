import { Outlet } from 'react-router-dom';
import { useState } from "react";
import styled from 'styled-components';
import AdminNav from '../../components/Admin/AdminNav.tsx';
import AdminHeader from '../../components/Admin/AdminHeader.tsx';
import * as Set from "./admin/style/AdminSetStyle.ts"

const AdminPage = () => {
  const [isDay, setIsDay] = useState(true);
  return (
    <StMain>
    {/* <Set.MainContainer>
    <Set.GridContainer>
      <AdminNav isDay={isDay} setIsDay={setIsDay}/>
       <Set.AdminMain isDay={isDay}>
        <AdminHeader/>
        <Set.DashBoardSection> */}
        <Outlet />
        {/* </Set.DashBoardSection>
      </Set.AdminMain>

  </Set.GridContainer>
    </Set.MainContainer> */}
    </StMain>
  );
};

export default AdminPage;

const StMain = styled.main`
  width: 100%;
  margin: 0 auto;
  gap: 100px;
  @media screen and (min-width: 1024px) {
    width: 100%;
    
  }
`;

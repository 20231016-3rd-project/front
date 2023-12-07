import { useState } from "react";

import AdminNav from "../../../components/Admin/AdminNav.tsx";
import AdminHeader from "../../../components/Admin/AdminHeader.tsx"
import Dashboard from "../../../components/Admin/Dashboard.tsx";
import * as Set from "./style/AdminSetStyle"

const AdminSettingPage: React.FC = () => { 
   const [isDay, setIsDay] = useState(true);

  return (
    <Set.MainContainer>
      <Set.GridContainer>
        <AdminNav isDay={isDay} setIsDay={setIsDay}/>

        <Set.AdminMain isDay={isDay}>
          <AdminHeader/>
          <Set.DashBoardSection>
            <Dashboard/>
          </Set.DashBoardSection>
        </Set.AdminMain>

      </Set.GridContainer>
    </Set.MainContainer>
   
  );
};

export default AdminSettingPage;

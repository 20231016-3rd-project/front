import { Outlet } from 'react-router-dom';
import styled from 'styled-components';

const AdminPage = () => {
  return (
    
    <StMain>  
      <Outlet />
    </StMain>
    
  );
};

export default AdminPage;

const StMain = styled.main`
  width: 100%;
  border: 1px solid red;
  margin: 0 auto;
  gap: 100px;
  @media screen and (min-width: 1024px) {
    width: 100%;
    
  }
`;

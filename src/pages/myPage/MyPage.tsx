import { Outlet } from 'react-router-dom';
import { StMain } from '../../components/Stmain';

const MyPage = () => {
  return (
    <StMain>
      <Outlet />
    </StMain>
  );
};

export default MyPage;

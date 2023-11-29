import { Outlet, useLocation } from 'react-router-dom';
import Header from '../components/UI/Header/Header';
import Footer from '../components/UI/Footer/Footer';


const Layout = () => {
  const location = useLocation();
  const isAdminRoute = location.pathname.startsWith('/admin');
  const isAuthRoute = location.pathname === '/signin' || location.pathname === '/signup';

  return (
    <>
      {!isAdminRoute && !isAuthRoute && <Header />}
      <Outlet />
      {!isAdminRoute && !isAuthRoute && <Footer />}
    </>
  );
};

export default Layout;

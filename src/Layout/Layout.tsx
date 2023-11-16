import { Outlet, useLocation } from 'react-router-dom';
import Header from '../components/UI/Header/Header';
import Footer from '../components/UI/Footer/Footer';


const Layout = () => {
  const location = useLocation();
  const isAdminRoute = location.pathname.startsWith('/admin');

  return (
    <>
      {!isAdminRoute && <Header />}
      <Outlet />
      {!isAdminRoute && <Footer />}
    </>
  );
};

export default Layout;

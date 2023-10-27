import { Outlet } from 'react-router-dom';
import Header from '../components/UI/Header/Header';
import Footer from '../components/UI/Footer/Footer';
import styled from 'styled-components';

const Layout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

export default Layout;
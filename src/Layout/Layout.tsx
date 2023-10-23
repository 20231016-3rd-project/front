import { Outlet } from 'react-router-dom';
import Header from '../components/UI/Header/Header';
import Footer from '../components/UI/Footer/Footer';
import styled from 'styled-components';

const Layout = () => {
  return (
    <Container>
      <Header />
      <Outlet />
      <Footer />
    </Container>
  );
};

export default Layout;

const Container = styled.div`
  * {
    font-family: 'Quicksand';
  }
`;

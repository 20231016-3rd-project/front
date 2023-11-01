import { createBrowserRouter } from 'react-router-dom';
import Layout from '../Layout/Layout';

import Main from '../pages/main/Main';
import SignIn from '../pages/signIn/SignIn';
import SignUp from '../pages/signUp/SignUp';

import AdminPage from '../pages/adminPage/AdminPage';
import AdminChatPage from '../pages/adminPage/admin/AdminChatPage';
import AdminSettingPage from '../pages/adminPage/admin/AdminSettingPage';
import ReportPage from '../pages/adminPage/admin/ReportPage';
import ClosurePage from '../pages/adminPage/admin/ClosurePage';
import StoreRegistPage from '../pages/adminPage/admin/StoreRegistPage';
import RegistListPage from '../pages/adminPage/admin/RegistListPage';
import RestaurantInfo from '../pages/restaurantInfo/RestaurantInfo';
import MyPage from '../pages/myPage/MyPage';
import DetialPage from '../pages/main/DetialPage';


const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Main />,
      },
      {
        path: '/signin',
        element: <SignIn />,
      },
      {
        path: '/signup',
        element: <SignUp />,
      },
      {
        path: '/restinfo',
        element: <RestaurantInfo />,
      },
      {
        path: '/mypage',
        element: <MyPage />,
      },
      {
        path: '/detailpage',
        element: <DetialPage />,
      },
      {
        path:'admin',
        element: <AdminPage/>,
        children: [
          {
            index: true,
            element: <AdminSettingPage/>,
          },
          {
            path: 'regist',
            element: <StoreRegistPage/>,
          },
          {
            path: 'closure',
            element: <ClosurePage/>,
          },
          {
            path: 'registli',
            element: <RegistListPage/>,
          },
          {
            path: 'report',
            element: <ReportPage/>,
          },
          {
            path: 'adminchat',
            element:<AdminChatPage/>,
          },
        ],
      },
    ],
  },
]);
export default router;

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
import MySettingPage from '../pages/myPage/my/MySettingPage';
import MyWishListPage from '../pages/myPage/my/MyWishListPage';
import MyReviewsPage from '../pages/myPage/my/MyReviewsPage';
import UserInfoPage from '../pages/myPage/my/UserInfoPage';
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
        path: '/restaurant/:restaurantId',
        element: <RestaurantInfo />,
      },
      {
        path: '/my',
        element: <MyPage />,
        children: [
          {
            index: true,
            element: <MySettingPage />,
          },
          {
            path: 'userinfo',
            element: <UserInfoPage />,
          },
          {
            path: 'Wishlist',
            element: <MyWishListPage />,
          },
          {
            path: 'Reviews',
            element: <MyReviewsPage />,
          },
        ],
      },
      {
        path: '/detailpage',
        element: <DetialPage />,
      },
      {
        path: 'admin',
        element: <AdminPage />,
        children: [
          {
            index: true,
            element: <AdminSettingPage />,
          },
          {
            path: 'regist',
            element: <StoreRegistPage />,
          },
          {
            path: 'closure',
            element: <ClosurePage />,
          },
          {
            path: 'registli',
            element: <RegistListPage />,
          },
          {
            path: 'report',
            element: <ReportPage />,
          },
          {
            path: 'adminchat',
            element: <AdminChatPage />,
          },
        ],
      },
    ],
  },
]);
export default router;

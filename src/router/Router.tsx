import { createBrowserRouter } from 'react-router-dom';
import Layout from '../Layout/Layout';

import Main from '../pages/main/Main';
import SignIn from '../pages/signIn/SignIn';
import SignUp from '../pages/signUp/SignUp';

import AdminPage from '../pages/adminPage/adminPage';
import AdminChatPage from '../pages/adminPage/admin/AdminChatPage';
import AdminSettingPage from '../pages/adminPage/admin/AdminSettingPage';
import ReportPage from '../pages/adminPage/admin/ReportPage';
import ClosurePage from '../pages/adminPage/admin/ClosurePage';
import StoreRegistPage from '../pages/adminPage/admin/StoreRegistPage';
import RegistListPage from '../pages/adminPage/admin/RegistListPage';
import StoreEditPage from '../pages/adminPage/admin/StoreEditPage';
import RestaurantInfo from '../pages/restaurantInfo/RestaurantInfo';
import MyPage from '../pages/myPage/MyPage';
import MySettingPage from '../pages/myPage/my/MySettingPage';
import MyReviewsPage from '../pages/myPage/my/MyReviewsPage';
import DetialPage from '../pages/main/DetialPage';
import BestPage from '../pages/main/BestPage';
import MyWishPage from '../pages/myPage/my/MyWishListPage';

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
        path: '/mypage',
        element: <MyPage />,
        children: [
          {
            index: true,
            element: <MySettingPage />,
          },
          // {
          //   path: 'userinfo',
          //   element: <UserInfoPage />,
          // },
          {
            path: 'mylike',
            element: <MyWishPage />,
          },
          {
            path: 'Reviews',
            element: <MyReviewsPage />,
          },
        ],
      },
      {
        path: 'detailpage',
        element: <DetialPage />,
      },
      {
        path: 'bestpage',
        element: <BestPage />,
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
            path: 'closure/edit/:restaurantId', // 수정을 위한 경로
            element: <StoreEditPage />,
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

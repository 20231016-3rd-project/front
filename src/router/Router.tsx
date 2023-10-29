import { createBrowserRouter } from 'react-router-dom';
import Layout from '../Layout/Layout';

import Main from '../pages/main/Main';
import SignIn from '../pages/signIn/SignIn';
import SignUp from '../pages/signUp/SignUp';
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
    ],
  },
]);
export default router;

import { createBrowserRouter } from 'react-router-dom';
import Layout from '../Layout/Layout';

import Main from '../pages/main/Main';
import SignIn from '../pages/signIn/SignIn';
import SignUp from '../pages/signUp/SignUp';
import AdminPage from '../pages/adminPage/AdminPage';
import AdminChatPage from '../pages/adminPage/admin/AdminChatPage';
import AdminSettingPage from '../pages/adminPage/admin/AdminSettingPage';
import ReportPage from '../pages/adminPage/admin/ReportPage';
import StoreRegistPage from '../pages/adminPage/admin/StoreRegistPage';

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
            path: 'report',
            element: <ReportPage/>,
          },
          {
            path: 'adminchat',
            element:<AdminChatPage/>,
          },
          {
            path: ''
          }
        ]
      }
    ],
  },
]);
export default router;

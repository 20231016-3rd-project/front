import { createBrowserRouter } from 'react-router-dom';
import Main from '../pages/main/Main';
import Layout from '../components/layout/Layout';
import SignIn from '../pages/signIn/SignIn';
import SignUp from '../pages/signUp/SignUp';

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
    ],
  },
]);
export default router;

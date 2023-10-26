import { createBrowserRouter } from 'react-router-dom';
import Layout from '../Layout/Layout';

import Main from '../pages/main/Main';
import SignIn from '../pages/signIn/SignIn';
import SignUp from '../pages/signUp/SignUp';
import RestaurantInfo from '../pages/restaurantInfo/RestaurantInfo';

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
    ],
  },
]);
export default router;

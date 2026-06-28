import { createBrowserRouter } from 'react-router';
import HomeLayout from '../Layouts/HomeLayout';
import Home from '../Pages/Home';
import Category from '../Pages/Category';
import Login from '../Pages/Login';
import Register from '../Pages/Register';
import AuthLayuout from '../Layouts/AuthLayuout';
import NewsDetails from '../Pages/NewsDetails';
import PrivateRoute from '../Components/PrivateRoute';

const router = createBrowserRouter([
  {
    path: '/',
    Component: HomeLayout,
    children: [
      {
        path: '',
        Component: Home,
      },
      {
        path: '/category/:id',
        Component: Category,
        loader: () => fetch('/news.json'),
      },
    ],
  },
  {
    path: '/auth',
    Component: AuthLayuout,
    children: [
      {
        path: '/auth/login',
        Component: Login,
      },
      {
        path: '/auth/register',
        Component: Register,
      },
    ],
  },
  {
    path: '/newsDetails/:id',
    element:<PrivateRoute><NewsDetails></NewsDetails></PrivateRoute>,
    loader: () => fetch('/news.json'),
  },
  {
    path: '/*',
    element: <h2>eRROR404</h2>,
  },
]);

export default router;

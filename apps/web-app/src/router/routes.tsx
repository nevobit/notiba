import { RouteObject } from 'react-router-dom';
import { ErrorBoundary } from '../screens';
import Home from '@/modules/assets/screens/Home';
import Create from '@/modules/assets/screens/Create';
import Layout from '@/components/Layout/Layout';

export const routes: RouteObject[] = [
  {
    path: '/',
    element: <Layout />,
    children: [{
      path: '/',
      element: <Home />,
      errorElement: <ErrorBoundary />,
    },
    {
      path: '/assets',
      element: <Home />,
      errorElement: <ErrorBoundary />,
    },
    ],
    errorElement: <ErrorBoundary />,
  },
  {
    path: '/assets/new',
    element: <Create />,
    errorElement: <ErrorBoundary />,
  },
];

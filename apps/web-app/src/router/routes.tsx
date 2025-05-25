import { RouteObject } from 'react-router-dom';
import { ErrorBoundary } from '../screens';
import Home from '@/modules/assets/screens/Home';
import Create from '@/modules/assets/screens/Create';

export const routes: RouteObject[] = [
  {
    path: '/',
    element: <Home />,
    errorElement: <ErrorBoundary />,
  },
  {
    path: '/assets',
    element: <Home />,
    errorElement: <ErrorBoundary />,
  },
  {
    path: '/assets/new',
    element: <Create />,
    errorElement: <ErrorBoundary />,
  },
];

import { TValues } from '@src/shared/types';
import { RouteProps } from 'react-router-dom';
import { Home } from '@src/pages/Home/';
import { User } from '@src/pages/User/';
import { NotFound } from '@src/pages/NotFound';

const AppRoutes = {
    home: 'home',
    user: 'user',
    notFound: 'not_found',
} as const;

export const RoutePath: Record<TValues<typeof AppRoutes>, string> = {
    [AppRoutes.home]: '/',
    [AppRoutes.user]: '/user',
    [AppRoutes.notFound]: '*',
}


export const routeConfig: Record<TValues<typeof AppRoutes>, RouteProps> = {
    [AppRoutes.user]: {
        element: <User />,
        path: RoutePath.user,
    },
    [AppRoutes.home]: {
        element: <Home />,
        path: RoutePath.home,
    },
    [AppRoutes.notFound]: {
        element: <NotFound />,
        path: RoutePath.not_found,
    },
}
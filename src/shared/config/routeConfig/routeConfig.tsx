import { TValues } from '@src/shared/types';
import { RouteProps } from 'react-router-dom';
import { Home } from '@src/pages/Home/';
import { User } from '@src/pages/User/';

const AppRoutes = {
    home: 'home',
    user: 'user',
} as const;

export const RoutePath: Record<TValues<typeof AppRoutes>, string> = {
    [AppRoutes.home]: '/',
    [AppRoutes.user]: '/user',
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
}
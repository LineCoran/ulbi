import './styles/index.scss'
import { useTheme } from '@src/shared/providers/ThemeProvieder';
import { classNames } from '@src/shared/lib/classNames';
import { AppRouter } from '@src/app/providers/router';
import { Navbar } from '@src/widgets/Navbar';
import { Suspense } from 'react';

export const App = () => {

    const { theme } = useTheme();

    return (
        <Suspense fallback="loading">
            <div className={classNames('app', {}, [theme])} key={theme}>
                <Navbar />
                <AppRouter />
            </div>
        </Suspense>
    )
}
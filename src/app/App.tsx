import './styles/index.scss'
import { Link, Route, Routes } from 'react-router-dom';
import { Suspense } from 'react';
import { useTheme } from '@src/shared/providers/ThemeProvieder';
import { Home } from '@src/pages/Home/';
import { User } from '@src/pages/User/';
import { classNames } from '@src/shared/helpers/classNames';

export const App = () => {

    const { theme, toggleTheme } = useTheme()


    return (
        <div className={classNames('app', {}, [theme])} key={theme}>
            <button onClick={toggleTheme}>{theme}</button>
            <Link to={'/'}>Home</Link>
            <Link to={'/user'}>User</Link>
            <Suspense fallback={<div>Loading...</div>}>
                <Routes>
                    <Route path={'/'} element={<Home />} />
                    <Route path={'/user'} element={<User />} />
                </Routes>
            </Suspense>
        </div>
    )
}
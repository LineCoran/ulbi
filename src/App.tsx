import './app/styles/index.scss'
import { Link, Route, Routes } from 'react-router-dom';
import { HomePageAsync } from './pages/Home/HomePage.async';
import { UserPageAsync } from './pages/User/UserPage.async';
import { Suspense } from 'react';
import { useTheme } from './app/theme/useTheme';

export const App = () => {

    const { theme, toggleTheme } = useTheme()


    return (
        <div className={`app ${theme}`} key={theme}>
            <button onClick={toggleTheme}>{theme}</button>
            <Link to={'/'}>Home</Link>
            <Link to={'/user'}>User</Link>
            <Suspense fallback={<div>Loading...</div>}>
                <Routes>
                    <Route path={'/'} element={<HomePageAsync />} />
                    <Route path={'/user'} element={<UserPageAsync />} />
                </Routes>
            </Suspense>
        </div>
    )
}
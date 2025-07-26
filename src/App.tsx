import './index.scss'
import { Link, Route, Routes } from 'react-router-dom';
import { HomePageAsync } from './pages/Home/HomePage.async';
import { UserPageAsync } from './pages/User/UserPage.async';
import { Suspense } from 'react';

export const App = () => {
    return (
        <div className="app">
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
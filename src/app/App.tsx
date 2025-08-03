import './styles/index.scss'
import { useTheme } from '@src/shared/providers/ThemeProvieder';
import { classNames } from '@src/shared/lib/classNames';
import { AppRouter } from '@src/app/providers/router';
import { Navbar } from '@src/widgets/Navbar';

export const App = () => {

    const { theme, toggleTheme } = useTheme()


    return (
        <div className={classNames('app', {}, [theme])} key={theme}>
            <Navbar />
            <button onClick={toggleTheme}>{theme}</button>
            <AppRouter />
        </div>
    )
}
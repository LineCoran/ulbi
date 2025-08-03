import './styles/index.scss'
import { useTheme } from '@src/shared/providers/ThemeProvieder';
import { classNames } from '@src/shared/lib/classNames';
import { AppRouter } from '@src/app/providers/router';
import { Navbar } from '@src/widgets/Navbar';
import { Button } from '@src/shared/ui';

export const App = () => {

    const { theme } = useTheme();

    return (
        <div className={classNames('app', {}, [theme])} key={theme}>
            <Navbar />
            <AppRouter />
            <Button>Проверить</Button>
        </div>
    )
}
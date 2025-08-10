import { classNames } from '@src/shared/lib/classNames';
import { Switcher } from '@src/widgets/Switcher';
import { useTheme } from '@src/shared/providers/ThemeProvieder';

interface ThemeSwitcherProps {
    className?: string;
}

export const ThemeSwitcher = (props: ThemeSwitcherProps) => {
    const { className } = props
    const { theme, toggleTheme } = useTheme();
    const isChecked = theme === 'normal';

    return (

        <div className={classNames('', {}, [className])}>
            <Switcher value={isChecked} onSwitch={toggleTheme} />
        </div>
    );
};
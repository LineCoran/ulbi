import { classNames } from '@src/shared/lib/classNames';
import * as cls from './ThemeSwitcher.module.scss';
import { Switcher } from '@src/widgets/Switcher/ui/Switcher';
import { useTheme } from '@src/shared/providers/ThemeProvieder';

interface ThemeSwitcherProps {
    className?: string;
}

export const ThemeSwitcher = ({ className }: ThemeSwitcherProps) => {
    const { theme, toggleTheme } = useTheme();
    const isChecked = theme === 'normal';

    return (
        <div>
            <Switcher value={isChecked} onSwitch={toggleTheme} />
        </div>
    );
};
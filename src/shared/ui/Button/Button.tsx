import { classNames } from '@src/shared/lib/classNames';
import * as cls from './Button.module.scss'
import { ButtonHTMLAttributes, FC } from 'react';
import { TValues } from '@src/shared/types';

const ThemeButton = {
    primary: 'primary',
    secondary: 'secondary',
    clean: 'clean',
} as const;

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>{
    className?: string;
    theme?: TValues<typeof ThemeButton>,
}

export const Button: FC<ButtonProps> = (props) => {

    const {
        className,
        children,
        theme = ThemeButton.primary,
        ...otherProps
    } = props;

    return (
        <button
            type={'button'}
            className={classNames(cls.button, {}, [className, cls[theme]])}
            {...otherProps}
        >
            { children }
        </button>
    )

}
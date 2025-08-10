import { classNames } from '@src/shared/lib/classNames';
import * as cls from './AppLink.module.scss'
import { Link, LinkProps } from 'react-router-dom';
import { FC } from 'react';

const AppLinkTheme = {
    primary: 'primary',
    secondary: 'secondary',
} as const;

interface AppLinkProps extends  LinkProps {
    className?: string;
    theme?: keyof typeof AppLinkTheme;
}

export const AppLink: FC<AppLinkProps> = (props) => {

    const {
        className ,
        children,
        to,
        theme = 'primary',
        ...otherProps
    } = props

    return (
        <Link
            to={to}
            className={classNames(
                cls.appLink,
                {},
                [className, cls[AppLinkTheme[theme]]
                ])}
            {...otherProps}
        >
            { children }
        </Link>
    )
}
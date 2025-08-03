import { classNames } from '@src/shared/lib/classNames';
import * as cls from './AppLink.module.scss'
import { Link, LinkProps } from 'react-router-dom';
import { FC } from 'react';
import { TValues } from '@src/shared/types';

const AppLinkTheme = {
    primary: 'primary',
    secondary: 'secondary',
} as const;

interface AppLinkProps extends  LinkProps {
    className?: string;
    theme?: TValues<typeof AppLinkTheme>
}

export const AppLink: FC<AppLinkProps> = (props) => {

    const {
        className ,
        children,
        to,
        theme = AppLinkTheme.primary as TValues<typeof AppLinkTheme>,
        ...otherProps
    } = props

    return (
        <Link
            to={to}
            className={classNames(
                cls.appLink,
                {},
                [className, cls[theme]
                ])}
            {...otherProps}
        >
            { children }
        </Link>
    )
}
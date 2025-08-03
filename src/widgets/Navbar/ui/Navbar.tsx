import { classNames } from '@src/shared/lib/classNames';
import * as cls from './Navbar.module.scss'
import { AppLink } from '@src/shared/ui';

interface NavBarProps {
    className?: string;
}

export const Navbar = ({ className }: NavBarProps) => {

    return (
        <div className={classNames(cls.navbar, {}, [className])}>
            <AppLink to={'/'}>Home</AppLink>
            <AppLink theme={'primary'} to={'/user'}>User</AppLink>
        </div>
    )

}
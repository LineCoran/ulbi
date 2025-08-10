import { classNames } from '@src/shared/lib/classNames';
import { AppLink } from '@src/shared/ui';
import { ThemeSwitcher } from '@src/widgets/ThemeSwitcher';
import { LangSwitcher } from '@src/widgets/LangSwitcher';
import * as cls from './Navbar.module.scss'
import { useTranslation } from 'react-i18next';

interface NavBarProps {
    className?: string;
}

export const Navbar = ({ className }: NavBarProps) => {

    const { t } = useTranslation()
    return (
        <div className={classNames(cls.navbar, {}, [className])}>
            <ThemeSwitcher />
            <LangSwitcher />
            <div className={cls.list}>
                <AppLink to={'/'}>{t('Домашняя страница')}</AppLink>
                <AppLink theme={'primary'} to={'/user'}>{t('Страница пользователя')}</AppLink>
            </div>
        </div>
    )

}
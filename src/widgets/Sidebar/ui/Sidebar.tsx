import { classNames } from '@src/shared/lib/classNames';
import { useState } from 'react';
import * as cls from './Sidebar.module.scss'
import { Button } from '@src/shared/ui';
import { useTranslation } from 'react-i18next';

interface SidebarProps {
    className?: string;
}

export const Sidebar = ({ className }: SidebarProps) => {

    const { t } = useTranslation()
    const [isCollapsed, setIsCollapsed] = useState(false);

    const onToggle = () => {
        setIsCollapsed((prev) => !prev)
    }

    return (
        <div className={classNames(cls.sidebar, { [cls.collapsed]: isCollapsed }, [className])}>
            {t('Меню')}
            <Button onClick={onToggle}>
                {t('Скрыть')}
            </Button>
        </div>
    )

}
import { classNames } from '@src/shared/lib/classNames';
import * as cls from './PageError.module.scss'
import { Button } from '@src/shared/ui';
import { useTranslation } from 'react-i18next';

interface PageErrorProps {
    className?: string;
}

export const PageError = ({ className }: PageErrorProps) => {
    const { t } = useTranslation()

    const reloadPage = () => {
        window.location.reload()
    }

    return (
        <div className={classNames(cls.pageError, {}, [className])}>
            <h2>

                {t('Произошла ошибка')}
            </h2>
            <Button onClick={reloadPage}>
                {t('Обновить страницу')}
            </Button>
        </div>
    )

}
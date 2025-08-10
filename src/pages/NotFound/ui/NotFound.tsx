import { useTranslation } from 'react-i18next';

export const NotFound = () => {
    const { t } = useTranslation()
    return (
        <div>
            <p>{t('Страница не найдена')}</p>
        </div>
    )
}

export default NotFound;
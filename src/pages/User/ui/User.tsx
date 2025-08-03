import { useTranslation } from 'react-i18next';

export const User = () => {

    const { t } = useTranslation()

    return (
        <h1>
            {t("Страница пользователя")}
        </h1>
    )
}
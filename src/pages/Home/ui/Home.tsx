import { useTranslation } from 'react-i18next';

export const Home = () => {
    const { t } = useTranslation()
    return (
        <div>
          <p>{t('Домашняя страница')}</p>
        </div>
    )
}

export default Home;
import { useTranslation } from 'react-i18next';
import { Button } from '@src/shared/ui';

export const LangSwitcher = () => {
    const {t, i18n} = useTranslation()

    const keys: Record<string, string> = {
        'ru': 'Ру',
        'en': 'English',
    }

    const toggleLanguage = () => {
        i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru')
    }

    return (
        <Button onClick={toggleLanguage}>
            {keys[i18n.language]}
        </Button>
    )
}
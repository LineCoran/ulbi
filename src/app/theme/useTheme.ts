import { useContext } from 'react';
import { LocaleStorageAppThemeKey, ThemeContext, ThemeVariant } from './ThemeContext';

export const useTheme = () => {
    const { theme, setTheme } = useContext(ThemeContext)


    const toggleTheme = () => {
        const newTheme = theme === ThemeVariant.normal ? ThemeVariant.dark : ThemeVariant.normal;
        console.log(`${theme} === ${ThemeVariant.normal}`)
        console.log(newTheme)
        setTheme(newTheme)
        localStorage.setItem(LocaleStorageAppThemeKey, newTheme)
    }

    return {
        theme, toggleTheme
    }
}
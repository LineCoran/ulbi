import { FC, useState } from 'react';
import { LocaleStorageAppThemeKey, ThemeContext, ThemeVariant, ThemeVariantType } from './ThemeContext';

const defaultTheme = localStorage.getItem(LocaleStorageAppThemeKey) as ThemeVariantType || ThemeVariant.normal;

export const ThemeProvider: FC = ({ children }) => {
    const [theme, setTheme] = useState<ThemeVariantType>(defaultTheme)

    return (
        <ThemeContext.Provider value={{ theme, setTheme }}>
            {children}
        </ThemeContext.Provider>
    )
}
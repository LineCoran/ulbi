import { createContext } from 'react';

export const LocaleStorageAppThemeKey = 'app-theme';


export const ThemeVariant = {
    dark: 'dark',
    normal: 'normal',
} as const;

export type ThemeVariantType = typeof ThemeVariant[keyof typeof ThemeVariant];


interface IThemeContext {
    theme?: ThemeVariantType;
    setTheme?: (theme: ThemeVariantType) => void;
}


export const ThemeContext = createContext<IThemeContext>({});
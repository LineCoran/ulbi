import { createContext } from 'react';
import { TValues } from '@src/shared/types';

export const LocaleStorageAppThemeKey = 'app-theme';

export const ThemeVariant = {
    dark: 'dark',
    normal: 'normal',
} as const;

export type ThemeVariantType = TValues<typeof ThemeVariant>;


interface IThemeContext {
    theme?: ThemeVariantType;
    setTheme?: (theme: ThemeVariantType) => void;
}


export const ThemeContext = createContext<IThemeContext>({});
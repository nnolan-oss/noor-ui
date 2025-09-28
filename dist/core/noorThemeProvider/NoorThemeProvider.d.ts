import { ReactNode } from 'react';
import { ThemeConfig } from '../../types/theme/theme';
export type Theme = "light" | "dark";
interface ThemeContextType {
    mode: Theme;
    theme: ThemeConfig | null;
    toggleMode: () => void;
}
export declare const NoorThemeProvider: ({ children, theme }: {
    children: ReactNode;
    theme: ThemeConfig;
}) => import("react/jsx-runtime").JSX.Element;
export declare const useTheme: () => ThemeContextType;
export {};
//# sourceMappingURL=NoorThemeProvider.d.ts.map
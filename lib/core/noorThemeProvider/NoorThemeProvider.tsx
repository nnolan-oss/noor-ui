// ThemeContext.tsx
import {createContext, useContext, useState, type ReactNode} from "react";
import type {ThemeConfig} from "../../types/theme/theme";

export type Theme = "light" | "dark";

interface ThemeContextType {
  mode: Theme;
  theme: ThemeConfig | null
  toggleMode: () => void;
}

const NoorThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const NoorThemeProvider = ({children, theme}: { children: ReactNode, theme: ThemeConfig }) => {
  const [mode, setMode] = useState<Theme>("light");

  const toggleMode = () =>
      setMode((prev) => (prev === "light" ? "dark" : "light"));

  return (
      <NoorThemeContext.Provider value={{mode, toggleMode, theme}}>
        {children}
      </NoorThemeContext.Provider>
  );
};

// Custom hook (best practice)
export const useTheme = () => {
  const context = useContext(NoorThemeContext);
  if (!context) {
    throw new Error("useTheme must be used inside ThemeProvider");
  }
  return context;
};

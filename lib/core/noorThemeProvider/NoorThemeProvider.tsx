// ThemeContext.tsx
import {createContext, useContext, useState, type ReactNode, useEffect} from "react";
import type {ThemeConfig} from "../../types/theme/theme";

export type Theme = "light" | "dark";

interface ThemeContextType {
  mode: Theme;
  theme: ThemeConfig;
  toggleMode: () => void;
}

const NoorThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const NoorThemeProvider = ({children, theme}: { children: ReactNode, theme: ThemeConfig }) => {
  const lsTheme = localStorage.getItem("theme")! as Theme
  const [mode, setMode] = useState<Theme>(lsTheme);

  const toggleMode = () => {
    setMode((prev) => (prev === "light" ? "dark" : "light"));
    localStorage.setItem("theme", mode === "light" ? "dark" : "light");
    document.documentElement.classList.toggle("dark");
  }

  useEffect(()=>{
      if(lsTheme === "dark"){
        document.documentElement.classList.add("dark")
      }
  }, [lsTheme])

  return (
      <NoorThemeContext.Provider value={{mode, toggleMode, theme}}>
        {children}
      </NoorThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(NoorThemeContext);
  if (!context) {
    throw new Error("useTheme must be used inside NoorThemeProvider");
  }
  return context;
};

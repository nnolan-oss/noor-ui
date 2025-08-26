// ThemeContext.tsx
import { createContext, useContext, useState, type ReactNode, useEffect } from "react";
import type { ThemeConfig } from "../../types/theme/theme";

export type Theme = "light" | "dark";

interface ThemeContextType {
  mode: Theme;
  theme: ThemeConfig;
  toggleMode: () => void;
}

const NoorThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const NoorThemeProvider = ({
                                    children,
                                    theme,
                                    defaultMode,
                                  }: {
  children: ReactNode;
  theme: ThemeConfig;
  defaultMode: Theme;
}) => {
  // initialize theme: use localStorage if available, else fallback to defaultMode
  const getInitialTheme = (): Theme => {
    const stored = localStorage.getItem("theme") as Theme | null;
    return stored === "light" || stored === "dark" ? stored : defaultMode;
  };

  const [mode, setMode] = useState<Theme>(getInitialTheme);

  const toggleMode = () => {
    setMode((prev) => {
      const next = prev === "light" ? "dark" : "light";
      localStorage.setItem("theme", next);
      return next;
    });
  };

  useEffect(() => {
    if (mode === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [mode]);

  return (
      <NoorThemeContext.Provider value={{ mode, toggleMode, theme }}>
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

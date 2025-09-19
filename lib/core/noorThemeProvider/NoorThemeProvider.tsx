// ThemeContext.tsx
import {
  createContext,
  useContext,
  useState,
  type ReactNode,
  useEffect,
} from "react";
import type { ThemeConfig } from "../../types/theme/theme";
import { defaultThemeConfig } from "./defaultThemeConfig";

export type ThemeMode = "light" | "dark";

interface ThemeContextType {
  mode: ThemeMode;
  theme: ThemeConfig;
  toggleMode: (theme?: ThemeMode) => void;
}

const NoorThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const NoorThemeProvider = ({
  children,
  theme = defaultThemeConfig,
  defaultMode,
}: {
  children: ReactNode;
  theme: ThemeConfig;
  defaultMode: ThemeMode;
}) => {
  // initialize theme: use localStorage if available, else fallback to defaultMode
  const getInitialTheme = (): ThemeMode => {
    const stored = localStorage.getItem("theme") as ThemeMode | null;
    return stored === "light" || stored === "dark" ? stored : defaultMode;
  };

  const [mode, setMode] = useState<ThemeMode>(getInitialTheme);

  const toggleMode = (theme?: ThemeMode) => {
    setMode((prev) => {
      if (theme) {
        localStorage.setItem("theme", theme);
        return theme;
      } else {
        const next = prev === "light" ? "dark" : "light";
        localStorage.setItem("theme", next);
        return next;
      }
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

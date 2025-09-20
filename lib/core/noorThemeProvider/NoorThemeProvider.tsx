// ThemeContext.tsx
"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";
import merge from "deepmerge";
import { theme as defaultTheme } from "../../theme";
import combineMerge from "../../utils/combineMerge";
import "../../theme/base/colors.css"
export type ThemeMode = "light" | "dark";

interface ThemeContextType {
  theme: {
    components: any;
    typography: any;
    spacing: any;
    breakpoints: any;
    zIndex: any;
    colors: any;
    shadows: any;
  };
  mode: ThemeMode;
  toggleMode: (theme?: ThemeMode) => void;
}

interface ThemeProviderProps {
  children: ReactNode;
  theme?: {
    components?: any;
    typography?: any;
    spacing?: any;
    breakpoints?: any;
    zIndex?: any;
    colors?: any;
    shadows?: any;
  };
  defaultMode: ThemeMode;
}

const NoorThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const NoorThemeProvider = ({
  children,
  theme = {},
  defaultMode,
}: ThemeProviderProps) => {
  // merge default + user theme
  const mergedTheme = merge(
    defaultTheme,
    theme,
    {
      arrayMerge: combineMerge,
    }
  );

  // Ensure components structure is properly set
  const themeWithComponents = {
    components: mergedTheme.components || {},
    typography: mergedTheme.typography || {},
    spacing: mergedTheme.spacing || {},
    breakpoints: mergedTheme.breakpoints || {},
    zIndex: mergedTheme.zIndex || {},
    colors: mergedTheme.colors || {},
    shadows: mergedTheme.shadows || {},
  };

  // initialize theme mode from localStorage or fallback
  const getInitialTheme = (): ThemeMode => {
    if (typeof window === "undefined") return defaultMode;
    const stored = localStorage.getItem("theme") as ThemeMode | null;
    return stored === "light" || stored === "dark" ? stored : defaultMode;
  };

  const [mode, setMode] = useState<ThemeMode>(getInitialTheme);

  const toggleMode = (theme?: ThemeMode) => {
    setMode((prev) => {
      const next = theme ?? (prev === "light" ? "dark" : "light");
      localStorage.setItem("theme", next);
      return next;
    });
  };

  // apply html class for Tailwind dark mode
  useEffect(() => {
    if (mode === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [mode]);

  return (
    <NoorThemeContext.Provider
      value={{
        theme: themeWithComponents,
        mode,
        toggleMode,
      }}
    >
      {children}
    </NoorThemeContext.Provider>
  );
};

// Hook for easy usage
export const useTheme = () => {
  const context = useContext(NoorThemeContext);
  if (!context) {
    throw new Error("useTheme must be used inside NoorThemeProvider");
  }
  return {
    theme: context.theme,
    mode: context.mode,
    toggleMode: context.toggleMode,
  };
};

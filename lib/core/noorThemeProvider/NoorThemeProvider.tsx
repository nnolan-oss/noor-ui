// ThemeContext.tsx
import { createContext, useContext, useState, type ReactNode } from "react";

type Theme = "light" | "dark";

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
}

const NoorThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const NoorThemeProvider = ({ children, theme }: { children: ReactNode }) => {
  const [theme, setTheme] = useState<Theme>("light");

  const toggleTheme = () =>
      setTheme((prev) => (prev === "light" ? "dark" : "light"));

  return (
      <NoorThemeContext.Provider value={{ theme, toggleTheme }}>
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

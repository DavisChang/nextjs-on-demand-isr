"use client";
import { createContext, useContext, useState } from "react";

type Theme = "light" | "dark";

type ThemeContextProviderProps = {
  children: React.ReactNode;
};
type ThemeContextType = {
  theme: Theme;
  toggleTheme: () => void;
};
const defaultThemeContext: ThemeContextType = {
  theme: "dark",
  toggleTheme: () => {
    console.warn("toggleTheme is not implemented");
  },
};

export const ThemeContext =
  createContext<ThemeContextType>(defaultThemeContext);
export const useThemeContext = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error(
      "useThemeContext must be used inside the ThemeContextProvider"
    );
  }
  return context;
};

export function ThemeContextProvider({ children }: ThemeContextProviderProps) {
  const [theme, setTheme] = useState<Theme>("dark");
  const toggleTheme = () => {
    if (theme === "dark") {
      setTheme("light");
    } else {
      setTheme("dark");
    }
  };
  return (
    <ThemeContext.Provider
      value={{
        theme,
        toggleTheme,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
}

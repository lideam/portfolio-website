"use client";

import { createContext, useContext, useState, useEffect } from "react";

const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  const [darkMode] = useState(true); // Always set dark mode to true

  useEffect(() => {
    if (typeof window !== "undefined") {
      // Apply dark mode to the document element
      document.documentElement.classList.add("dark");
    }
  }, []);

  useEffect(() => {
    if (typeof window !== "undefined") {
      // Save the theme as "dark" in localStorage
      localStorage.setItem("theme", "dark");
    }
  }, [darkMode]);

  return (
    <ThemeContext.Provider value={{ darkMode }}>
      {children}
    </ThemeContext.Provider>
  );
}

export const useTheme = () => useContext(ThemeContext);

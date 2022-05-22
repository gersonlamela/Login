import { useEffect, useState, createContext, useContext } from "react";

export const ThemeContext = createContext();

export function ThemeContextProvider({ children }) {
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") === "dark" ? "dark" : "light"
  );

  useEffect(() => {
    const root = window.document.documentElement;

    const removeColor = theme === "light" ? "dark" : "light";

    root.classList.remove(removeColor);
    root.classList.add(theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <>
      <ThemeContext.Provider value={{ theme, setTheme }}>
        <body className="bg-light dark:bg-dark transition-all">{children}</body>
      </ThemeContext.Provider>
    </>
  );
}

export function useTheme() {
  return useContext(ThemeContext);
}

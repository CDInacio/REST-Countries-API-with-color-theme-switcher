import { createContext, useEffect, useLayoutEffect, useState } from "react";

export const ThemeContext = createContext();

export default function ThemeContextProvider({ children }) {
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") != "light" ? "dark" : "light"
  );
  const removePrevTheme = theme === "dark" ? "light" : "dark";

  useLayoutEffect(() => {
    const root = window.document.documentElement;
    root.classList.remove(removePrevTheme);
    root.classList.add(theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

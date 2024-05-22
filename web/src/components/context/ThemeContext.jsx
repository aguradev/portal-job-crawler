import { createContext, useState, useEffect } from "react";

export const ThemeProviderContext = createContext({
  themeState: {
    theme: null,
    setTheme: () => null,
  },
  changeTheme: () => null,
});

export function ThemeProvider({ children }) {
  const [colorTheme, setColorTheme] = useState("light");

  const changeTheme = () => {
    if (
      colorTheme === "light" ||
      localStorage.getItem("color-theme") === "light"
    ) {
      document.body.classList.add("dark");
      localStorage.setItem("color-theme", "dark");
      setColorTheme("dark");
    } else {
      document.body.classList.remove("dark");
      localStorage.setItem("color-theme", "light");
      setColorTheme("light");
    }
  };

  useEffect(() => {
    const loadLocalstorageTheme = () => {
      if (
        !localStorage.getItem("color-theme") &&
        window.matchMedia("(prefers-color-scheme: dark)")
      ) {
        document.body.classList.add("dark");
      } else if (localStorage.getItem("color-theme") === "dark") {
        document.body.classList.add("dark");
      } else {
        document.body.classList.remove("dark");
      }

      setColorTheme(localStorage.getItem("color-theme"));
    };

    loadLocalstorageTheme();
  }, []);

  const contextValue = {
    themeState: {
      theme: colorTheme,
      setTheme: (color) => setColorTheme(color),
    },
    changeTheme: changeTheme,
  };

  return (
    <ThemeProviderContext.Provider value={contextValue}>
      {children}
    </ThemeProviderContext.Provider>
  );
}

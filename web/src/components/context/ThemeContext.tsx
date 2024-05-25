import { createContext, useState, useEffect } from "react";

interface ThemeProviderState {
  themeState: {
    theme: string;
    setTheme: (color: string) => void;
  };
  changeTheme: () => void;
}

const initialProviderState: ThemeProviderState = {
  themeState: {
    theme: "",
    setTheme: () => null,
  },
  changeTheme: () => null,
};

const ThemeProviderContext =
  createContext<ThemeProviderState>(initialProviderState);

const ThemeProvider: React.FC<{ children: JSX.Element | JSX.Element[] }> = ({
  children,
}) => {
  const [colorTheme, setColorTheme] = useState<string>("light");

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

      setColorTheme(localStorage.getItem("color-theme")!);
    };

    loadLocalstorageTheme();
  }, []);

  const contextValue: ThemeProviderState = {
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
};

export { ThemeProviderContext, ThemeProvider };

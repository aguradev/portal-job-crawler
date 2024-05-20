import Navigation from "@ui/Navigation";
import Footer from "../ui/Footer";
import { Link } from "react-router-dom";
import Button from "@element/Button";
import { LuSun, LuMoon } from "react-icons/lu";
import { useEffect, useState } from "react";

export default function DefaultLayout({ children }) {
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
        setColorTheme("dark");
      } else if (localStorage.getItem("color-theme") === "dark") {
        document.body.classList.add("dark");
        setColorTheme("dark");
      } else {
        document.body.classList.remove("dark");
      }
    };

    loadLocalstorageTheme();
  }, []);

  return (
    <>
      <div className="relative min-h-screen text-zinc-900 dark:text-zinc-300">
        <div className="absolute top-0 h-full w-full bg-white z-[-2] dark:bg-zinc-900 bg-[radial-gradient(100%_50%_at_50%_0%,rgba(0,163,255,0.13)_0,rgba(0,163,255,0)_50%,rgba(0,163,255,0)_100%)]"></div>
        <header>
          <Navigation>
            <div className="flex items-center gap-x-8 shrink-0">
              <Link to={`/`}>Home</Link>
              <Link to={`/overview`}>Overview</Link>
              <div>
                <Button
                  attribute={{ type: "button" }}
                  clickHandler={changeTheme}
                >
                  {colorTheme === "dark" ? <LuMoon /> : <LuSun />}
                </Button>
              </div>
            </div>
          </Navigation>
        </header>

        <main className="py-20 container-grid">{children}</main>

        <Footer />
      </div>
    </>
  );
}

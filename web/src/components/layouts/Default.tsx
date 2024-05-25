import Navigation from "@ui/Navigation";
import Footer from "../ui/Footer.jsx";
import { Link } from "react-router-dom";
import Button from "@element/Button";
import { LuSun, LuMoon } from "react-icons/lu";
import { useContext } from "react";
import { ThemeProviderContext } from "@context/ThemeContext.tsx";

interface DefaultLayoutProps {
  children: JSX.Element | JSX.Element[];
}

const DefaultLayout: React.FC<DefaultLayoutProps> = ({ children }) => {
  const { themeState, changeTheme } = useContext(ThemeProviderContext);
  const { theme } = themeState;

  return (
    <>
      <div className="relative text-zinc-900 dark:text-zinc-300">
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
                  {theme === "dark" ? <LuMoon /> : <LuSun />}
                </Button>
              </div>
            </div>
          </Navigation>
        </header>

        <main className="min-h-screen py-20 container-grid">{children}</main>

        <Footer />
      </div>
    </>
  );
};

export default DefaultLayout;

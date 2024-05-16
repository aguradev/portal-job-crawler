import PropTypes from "prop-types";

const Navigation = ({ children }) => {
  return (
    <nav className="py-4 border-b border-slate-200 bg-white/30 dark:border-zinc-700/40 backdrop-blur dark:bg-zinc-900/40 z-[99] sticky w-full top-0">
      <div className="container-grid">
        <div className="grid rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 size-10 place-content-center">
          <span className="text-lg font-bold text-white">J</span>
        </div>

        {children}
      </div>
    </nav>
  );
};

Navigation.propTypes = {
  children: PropTypes.element,
};

export default Navigation;

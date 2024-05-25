interface NavigationProps {
  children: JSX.Element | JSX.Element[];
}

const Navigation: React.FC<NavigationProps> = ({ children }) => {
  return (
    <nav className="py-4 border-b border-slate-200 bg-slate-100/40 dark:border-zinc-700/40 backdrop-blur dark:bg-zinc-900/80 z-[99] fixed w-full top-0">
      <div className="flex items-center justify-between container-grid">
        <div className="grid rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 size-10 place-content-center">
          <span className="text-lg font-bold text-white">J</span>
        </div>

        {children}
      </div>
    </nav>
  );
};

export default Navigation;

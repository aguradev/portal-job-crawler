import PropTypes from "prop-types";

const Navigation = ({ children }) => {
  return (
    <nav className="py-4 border-b border-slate-200">
      <div className="max-w-[800px] mx-auto lg:px-0 px-5 flex justify-between items-center">
        <div className="bg-gradient-to-r from-cyan-500 to-blue-500 size-10 rounded-full grid place-content-center">
          <span className="font-bold text-white text-lg">J</span>
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

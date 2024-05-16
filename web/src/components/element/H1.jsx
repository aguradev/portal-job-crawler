import PropTypes from "prop-types";

const Heading1 = ({ content, className = null }) => {
  return (
    <h1
      className={`text-zinc-800 dark:text-zinc-300 text-6xl mb-5 font-bold ${
        className ?? ""
      }`}
    >
      {content}
    </h1>
  );
};

Heading1.propTypes = {
  content: PropTypes.string,
  className: PropTypes.string,
};

export default Heading1;

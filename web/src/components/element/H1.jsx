import PropTypes from "prop-types";

const Heading1 = ({ content, className }) => {
  return (
    <h1 className={`text-zinc-800 text-6xl mb-5 font-bold ${className}`}>
      {content}
    </h1>
  );
};

Heading1.propTypes = {
  content: PropTypes.string,
  className: PropTypes.string,
};

export default Heading1;

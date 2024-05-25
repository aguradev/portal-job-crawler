const Heading1: React.FC<{
  content: string;
  className?: string;
}> = ({ content, className }) => {
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

export default Heading1;

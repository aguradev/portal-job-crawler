const Stat: React.FC<{ count: number; category: string }> = ({
  count,
  category,
}) => {
  return (
    <figure className="px-5 py-8 rounded-lg hover:bg-slate-100/50 dark:hover:bg-zinc-950/30">
      <h1 className="mb-4 text-4xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-l from-cyan-500 to-blue-500">
        {count}
      </h1>
      <figcaption className="font-bold text-center font-redditSans">
        {category}
      </figcaption>
    </figure>
  );
};

export default Stat;

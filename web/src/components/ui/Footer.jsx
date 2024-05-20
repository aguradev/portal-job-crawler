export default function Footer() {
  return (
    <footer className="py-6 border-t dark:border-zinc-700/40 bg-white/30 dark:bg-zinc-900">
      <h3 className="font-semibold text-center dark:text-zinc-300">
        {new Date().getFullYear()} &copy; made by 👩‍💻 aguradev
      </h3>
    </footer>
  );
}

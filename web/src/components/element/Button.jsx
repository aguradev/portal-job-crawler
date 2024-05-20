export default function Button({
  attribute,
  children,
  colorType,
  clickHandler,
}) {
  function btnTypeSelected(isType) {
    switch (isType) {
      case "primary":
        return "bg-blue-500";
      default:
        return "bg-slate-100 dark:bg-zinc-950/30 hover:bg-slate-200 dark:hover:bg-zinc-950/80";
    }
  }

  return (
    <button
      {...attribute}
      className={`p-3 rounded-lg ${btnTypeSelected(colorType)}`}
      onClick={clickHandler}
    >
      {children}
    </button>
  );
}

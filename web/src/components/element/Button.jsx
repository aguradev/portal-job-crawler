import PropsType from "prop-types";
export default function Button({
  attribute,
  children,
  colorType,
  clickHandler,
  classBtn,
}) {
  function btnTypeSelected(isType) {
    switch (isType) {
      case "primary":
        return "bg-blue-500 text-white";
      default:
        return "bg-slate-100 dark:bg-zinc-950/30 hover:bg-slate-200 dark:hover:bg-zinc-950/80";
    }
  }

  return (
    <button
      {...attribute}
      className={`p-3 rounded-lg ${classBtn} ${btnTypeSelected(colorType)}`}
      onClick={clickHandler}
    >
      {children}
    </button>
  );
}

Button.propTypes = {
  attribute: PropsType.object,
  children: PropsType.oneOfType([PropsType.element, PropsType.elementType]),
  colorType: PropsType.string,
  clickHandler: PropsType.func,
  classBtn: PropsType.string,
};

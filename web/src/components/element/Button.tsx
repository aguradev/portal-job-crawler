interface ButtonProps {
  attribute: object;
  children: JSX.Element | JSX.Element[] | string;
  colorType?: string;
  clickHandler?: () => void;
  classBtn?: string;
}

const Button: React.FC<ButtonProps> = ({
  attribute,
  children,
  colorType,
  clickHandler,
  classBtn,
}) => {
  function btnTypeSelected(isType?: string): string {
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
};

export default Button;

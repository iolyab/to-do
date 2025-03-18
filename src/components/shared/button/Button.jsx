import classes from "./button.module.scss";

const Button = ({
  label,
  size = "medium",
  className = "",
  variant,
  ...props
}) => {
  const sizeClass = size === "small" ? classes.small : classes.medium;

  const variantClass = () => {
    if (variant === "cancel") {
      return classes.cancel;
    } else if (variant === "save") {
      return classes.save;
    }
  };

  return (
    <button
      className={`${
        classes.button
      } ${sizeClass} ${variantClass()} ${className}`}
      {...props}
    >
      {label}
    </button>
  );
};

export { Button };

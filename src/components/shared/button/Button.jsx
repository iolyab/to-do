import classes from "./button.module.scss";

const Button = ({
  label,
  size = "medium",
  className = "",
  variant,
  icon,
  ...props
}) => {
  const sizeClass = size === "small" ? classes.small : classes.medium;

  const variantClass = () => {
    if (variant === "cancel") {
      return classes.cancel;
    } else if (variant === "save") {
      return classes.save;
    } else if (variant === "addLabel") {
      return classes.addLabel;
    } else if (variant === "saveLabel") {
      return classes.saveLabel;
    }
  };

  return (
    <button
      className={`${
        classes.button
      } ${sizeClass} ${variantClass()} ${className}`}
      {...props}
    >
      {icon ? (
        <img src={icon} alt={label || "icon"} className={classes.icon} />
      ) : (
        label
      )}
    </button>
  );
};

export { Button };

import classes from "./button.module.scss";

const Button = ({ label, size = "medium", className = "", ...props }) => {
  const sizeClass = size === "small" ? classes.small : classes.medium;
  return (
    <button
      className={`${classes.button} ${sizeClass} ${className}`}
      {...props}
    >
      {label}
    </button>
  );
};

export { Button };

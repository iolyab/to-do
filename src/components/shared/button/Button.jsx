import { useState } from "react";
import classes from "./button.module.scss";

const Button = ({
  label,
  disabled,
  size = "medium",
  className = "",
  variant,
  icon,
  pending = false,
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
    } else if (variant === "deadlineButton") {
      return classes.deadlineButton;
    } else if (variant === "arrowButton") {
      return classes.arrowButton;
    } else if (variant === "elseButton") {
      return classes.elseButton;
    } else {
      return classes.customButton;
    }
  };

  return (
    <button
      className={`${
        classes.button
      } ${sizeClass} ${variantClass()} ${className}`}
      disabled={disabled || pending}
      {...props}
    >
      {pending ? (
        <span className={classes.spinner} />
      ) : icon ? (
        <img src={icon} alt={label || "icon"} className={classes.icon} />
      ) : (
        label
      )}
    </button>
  );
};

export { Button };

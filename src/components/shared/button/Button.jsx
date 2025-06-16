import { Button } from "@mui/material";
// import { StyledButton } from "./StyledButton";
import classes from "./button.module.scss";

const Btn = ({
  label,
  disabled,
  size = "medium",
  className = "",
  variant,
  icon,
  pending = false,
  sx = {},
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
      return "";
    }
  };

  return (
    <Button
      sx={{
        backgroundColor: "#48293d",
        color: "white",
        "&:hover": {
          backgroundColor: "#d8c0cb",
          color: "#45304d",
        },
        "&:focus": {
          border: "1px solid #45304d",
        },
        ...sx,
      }}
      disabled={disabled || pending}
      className={`${
        classes.button
      } ${sizeClass} ${variantClass()} ${className}`}
      {...props}
    >
      {pending ? (
        <span className={classes.spinner} />
      ) : icon ? (
        <img src={icon} alt={label || "icon"} className={classes.icon} />
      ) : (
        label
      )}
    </Button>
  );
};

export { Btn };

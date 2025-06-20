import classes from "./input.module.scss";
import PropTypes from "prop-types";
import TextField from "@mui/material/TextField";

const Input = ({ label, value, error, handleChange, className, variant }) => {
  const sxPadding =
    variant === "edit"
      ? { "& .MuiOutlinedInput-input": { padding: "4px 40px 4px 5px" } }
      : { "& .MuiOutlinedInput-input": { padding: "10px 390px 10px 10px" } };

  return (
    <div className={`${classes.inputContainer} ${className || ""}`}>
      <TextField
        label={label}
        variant="outlined"
        value={value}
        onChange={handleChange}
        error={Boolean(error)}
        helperText={error}
        fullWidth
        size="small"
        sx={{
          ...sxPadding,
          "& .MuiOutlinedInput-notchedOutline": {
            borderColor: "#45304d",
          },
          "&:hover .MuiOutlinedInput-notchedOutline": {
            borderColor: "#48293d",
          },
          "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":
            {
              borderColor: "#48293d",
            },
          "& .MuiInputLabel-root": {
            color: "#48293d",
          },
          "& .MuiInputLabel-root.Mui-focused": {
            color: "#48293d",
          },
        }}
      ></TextField>
    </div>
  );
};

Input.propTypes = {
  handleChange: PropTypes.func,
};
Input.defaultProps = {
  handleChange: () => {},
};

export { Input };

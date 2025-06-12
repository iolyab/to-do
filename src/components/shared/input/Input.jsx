import classes from "./input.module.scss";
import PropTypes from "prop-types";
import TextField from "@mui/material/TextField";

const Input = ({ value, error, handleChange }) => {
  return (
    <div className={classes.inputContainer}>
      <TextField
        label="To-do..."
        variant="outlined"
        value={value}
        onChange={handleChange}
        error={Boolean(error)}
        helperText={error}
        fullWidth
        size="small"
        sx={{
          "& .MuiOutlinedInput-input": {
            padding: "10px 390px 10px 10px",
          },
          "& .MuiOutlinedInput-notchedOutline": {
            borderColor: "#ccc",
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

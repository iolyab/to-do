import classes from "./input.module.scss";
import PropTypes from "prop-types";

const Input = ({ value, error, handleChange }) => {
  return (
    <label className={classes.inputContainer}>
      <input
        type="text"
        placeholder="To-do..."
        value={value}
        onChange={handleChange}
        className={`${classes.input} ${error ? classes.error : ""}`}
      ></input>
      {error && <p className={classes.errorMessage}>{error}</p>}
    </label>
  );
};

Input.propTypes = {
  handleChange: PropTypes.func,
};
Input.defaultProps = {
  handleChange: () => {},
};

export { Input };

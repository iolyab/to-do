import React, { useState } from "react";
import { Input } from "../input/Input";
import { Btn } from "../button/Button";
import classes from "./createTask.module.scss";

import { useDispatch, useSelector } from "react-redux";
import { processUserInput } from "../../../store/tasks/actions";

const CreateTask = ({ onChange }) => {
  const [inputValue, setInputValue] = useState("");
  const [error, setError] = useState("");

  const dispatch = useDispatch();
  const isAdding = useSelector((state) => state.tasks.loading);

  const handleChange = (e) => {
    const value = e.target.value;
    setInputValue(value);

    if (value.trim() === "") {
      setError("Input cannot be empty.");
    } else if (value.length < 2) {
      setError("Input must have at least 2 characters");
    } else {
      setError("");
    }

    if (onChange && typeof onChange === "function") {
      onChange(e);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!error && inputValue.trim()) {
      dispatch(processUserInput(inputValue.trim()));
      setInputValue("");
    }
  };

  return (
    <form className={classes.inputFieldContainer} onSubmit={handleSubmit}>
      <Input
        label="Call John tomorrow at 2 pm #work..."
        type="text"
        value={inputValue}
        error={error}
        handleChange={handleChange}
      />
      <Btn
        type="submit"
        label="Add"
        disabled={isAdding || !!error}
        pending={isAdding}
        size="medium"
        variant="contained"
        color="primary"
        sx={{ width: "120px" }}
      />
    </form>
  );
};

export { CreateTask };

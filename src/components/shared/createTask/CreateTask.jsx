import React, { useState } from "react";
import { Input } from "../input/Input";
import { Button } from "../button/Button";
import classes from "./createTask.module.scss";

const CreateTask = ({ startDate, endDate, onAddTask, onChange, isAdding }) => {
  const [inputValue, setInputValue] = useState("");
  const [error, setError] = useState("");

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
    if (!error && inputValue) {
      if (onAddTask && typeof onAddTask === "function") {
        onAddTask(inputValue, startDate, endDate);
        setInputValue("");
      }
    }
  };

  return (
    <form className={classes.inputFieldContainer} onSubmit={handleSubmit}>
      <Input
        type="text"
        value={inputValue}
        error={error}
        handleChange={handleChange}
      />
      <Button
        type="submit"
        label="Add"
        disabled={isAdding}
        pending={isAdding}
        size="medium"
      />
    </form>
  );
};

export { CreateTask };

import React, { useState } from "react";
import { Input } from "../input/Input";
import { Button } from "../button/Button";
import classes from "./inputField.module.scss";

const InputField = ({ onAddTask, onChange }) => {
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
    // if (handleChange && typeof handleChange === "function") {
    //   handleChange(e);
    // }

    if (onChange && typeof onChange === "function") {
      onChange(e);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!error && inputValue) {
      console.log("Task is added");
    }
    onAddTask(inputValue);
    setInputValue("");

    // if (onSubmit && typeof onSubmit === "function") {
    //   onSubmit(e);
    // }
  };

  return (
    <form className={classes.inputFieldContainer} onSubmit={handleSubmit}>
      <Input
        type="text"
        value={inputValue}
        error={error}
        handleChange={handleChange}
      />
      <Button type="submit" label="Add" size="medium" />
    </form>
  );
};

export { InputField };

import React, { useState } from "react";
import { Input } from "../input/Input";
import { Button } from "../button/Button";
import classes from "./inputField.module.scss";

const InputField = ({ task, onAddTask }) => {
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
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!error && inputValue) {
      console.log("Task is added");
    }
    onAddTask(task);
    setInputValue("");
  };

  return (
    <form className={classes.inputFieldContainer} onSubmit={handleSubmit}>
      <Input value={inputValue} error={error} handleChange={handleChange} />
      <Button label="Add" size="medium" />
    </form>
  );
};

export { InputField };

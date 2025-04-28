import React from "react";
import { getSortParams } from "../../../utils/sort";
import classes from "./sortTasks.module.scss";

const TasksSort = ({ sortParams, onSortChange, sortFields }) => {
  const handleSortChange = (e) => {
    if (typeof onSortChange === "function") {
      onSortChange(getSortParams(e.target.value));
    }
  };

  const sortOptions = sortFields.map((field) => {
    return (
      <>
        <option value={`${field}-asc`}>⬆️{field}</option>
        <option value={`${field}-desc`}>⬇️{field}</option>
      </>
    );
  });

  return (
    <div>
      <select
        onChange={handleSortChange}
        value={
          sortParams.field === "none"
            ? "default"
            : `${sortParams.field}-${sortParams.order}`
        }
        className={classes.sortDropdown}
      >
        <option value="default">Sort</option>
        {sortOptions}
      </select>
    </div>
  );
};

export { TasksSort };

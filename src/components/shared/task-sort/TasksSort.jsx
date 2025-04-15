import React from "react";
import { getSortParams } from "../../../utils/sort";
import classes from "./sortTasks.module.scss";

const TasksSort = ({ sortParams, onSortChange }) => {
  const handleSortChange = (e) => {
    onSortChange(getSortParams(e.target.value));
  };
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
        <option value="priority-asc">⬆️ priority</option>
        <option value="priority-desc">⬇️ priority</option>
        <option value="deadline-asc">⬆️ deadline</option>
        <option value="deadline-desc">⬇️ deadline</option>
      </select>
    </div>
  );
};

export { TasksSort };

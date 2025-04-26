import React from "react";
import { getSortParams } from "../../../utils/sort";
import classes from "./sortTasks.module.scss";

const TasksSort = ({ sortParams, onSortChange, sortFields }) => {
  const handleSortChange = (e) => {
    onSortChange(getSortParams(e.target.value));
  };

  const sortOptions = sortFields.map((field) => {
    return (
      <>
        <option key={field} value={`${field}-asc`}>
          ⬆️{field}
        </option>
        <option key={field} value={`${field}-desc`}>
          ⬇️{field}
        </option>
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

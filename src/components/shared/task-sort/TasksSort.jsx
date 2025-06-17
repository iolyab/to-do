import React from "react";
import { getSortParams } from "../../../utils/sort";
import { MuiDropdown } from "../dropdown/Dropdown";

const TasksSort = ({ sortParams, onSortChange, sortFields }) => {
  const handleSortChange = (selectedValue) => {
    if (typeof onSortChange === "function") {
      onSortChange(getSortParams(selectedValue));
    }
  };

  const sortOptions = sortFields.flatMap((field) => [
    `${field}-asc`,
    `${field}-desc`,
  ]);

  return (
    <div>
      <MuiDropdown
        value={
          sortParams.field === "none"
            ? ""
            : `${sortParams.field}-${sortParams.order}`
        }
        onSelect={handleSortChange}
        options={sortOptions}
        placeholder="Sort"
        size="small"
        renderItem={(option) => {
          const [field, order] = option.split("-");
          return (
            <span>
              {order === "asc" ? "⬆️" : "⬇️"}
              {field}
            </span>
          );
        }}
        fullWidth={false}
      ></MuiDropdown>
    </div>
  );
};

export { TasksSort };

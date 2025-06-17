import React from "react";
import { MuiDropdown } from "../dropdown/Dropdown";

const TaskFilter = ({ onFilterChange }) => {
  const options = [
    "All",
    "priority-High",
    "priority-Medium",
    "priority-Low",
    "label-Personal",
    "label-Work",
    "date-Today",
    "date-ThisWeek",
    "date-Overdue",
  ];

  const handleFilterChange = (selectedValue) => {
    if (typeof onFilterChange === "function") {
      onFilterChange(selectedValue);
    }
  };

  return (
    <div>
      <MuiDropdown
        placeholder="Filter"
        value=""
        onSelect={handleFilterChange}
        options={options}
        size="small"
        renderItem={(option) => {
          const [type, label] = option.split("-");
          if (!label) return option;
          const prefixMap = {
            priority: "Priority: ",
            label: "Label: ",
            date: "Date: ",
          };
          return `${prefixMap[type] || ""}${label}`;
        }}
      ></MuiDropdown>
    </div>
  );
};

export { TaskFilter };

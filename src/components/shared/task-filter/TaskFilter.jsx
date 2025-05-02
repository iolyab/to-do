import React from "react";

const TaskFilter = ({ onFilterChange }) => {
  const handleFilterChange = (e) => {
    if (typeof onFilterChange === "function") {
      onFilterChange(e.target.value);
    }
  };

  return (
    <div>
      <select onChange={handleFilterChange}>
        <option value="All">All</option>
        <option value="priority-High">High priority</option>
        <option value="priority-Medium">Medium priority</option>
        <option value="priority-Low">Low priority</option>

        <option value="label-Personal">Personal</option>
        <option value="label-Work">Work</option>

        <option value="date-Today">Today</option>
        <option value="date-ThisWeek">This week</option>
        <option value="date-Overdue">Overdue</option>
      </select>
    </div>
  );
};

export { TaskFilter };

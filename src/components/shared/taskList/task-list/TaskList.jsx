import { TaskItemContainer } from "../task-item/TaskItemContainer";
import classes from "./taskList.module.scss";
import { useState } from "react";

const TaskList = ({
  tasks,
  handleDelete,
  handleCompleted,
  handleEdit,
  handlePriority,
  handleLabels,
  handleDeadline,
  id,
}) => {
  const [sortDirection, setSortDirection] = useState("none");
  const priorityOrder = {
    High: 3,
    Medium: 2,
    Low: 1,
    null: 0,
  };

  const getSortedTasks = () => {
    if (sortDirection === "none") return tasks;

    const sorted = [...tasks].sort((a, b) => {
      const aPriority = priorityOrder[a.priority] || 0;
      const bPriority = priorityOrder[b.priority] || 0;

      return sortDirection === "low-high"
        ? aPriority - bPriority
        : bPriority - aPriority;
    });
    return sorted;
  };
  return (
    <div>
      <div className={classes.sortContainer}>
        <select
          onChange={(e) => setSortDirection(e.target.value)}
          value={sortDirection}
          className={classes.sortDropdown}
        >
          <option value="none">Sort</option>
          <option value="low-high">low-high</option>
          <option value="high-low">high-low</option>
        </select>
      </div>
      <ul className={classes.taskListContainer}>
        {getSortedTasks().map((task) => (
          <TaskItemContainer
            key={task.id}
            task={task}
            handleDelete={handleDelete}
            handleCompleted={handleCompleted}
            handleEdit={handleEdit}
            handlePriority={handlePriority}
            handleLabels={handleLabels}
            handleDeadline={handleDeadline}
            id={id}
          />
        ))}
      </ul>
    </div>
  );
};

export { TaskList };

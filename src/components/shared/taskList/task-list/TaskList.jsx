import { TaskItemContainer } from "../task-item/TaskItemContainer";
import classes from "./taskList.module.scss";
import { useState, useContext } from "react";
import { TaskContext } from "../../../../context/TaskContext";
import { getSortedTasks } from "../../../../utils/sort";

const TaskList = () => {
  const { tasks } = useContext(TaskContext);
  const [sortDirection, setSortDirection] = useState("none");

  const sortedTasks = getSortedTasks(tasks, sortDirection);

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
          <option value="date-soon">sooner-later</option>
          <option value="date-late">later-sooner</option>
        </select>
      </div>
      <ul className={classes.taskListContainer}>
        {sortedTasks.map((task) => (
          <TaskItemContainer key={task.id} task={task} />
        ))}
      </ul>
    </div>
  );
};

export { TaskList };

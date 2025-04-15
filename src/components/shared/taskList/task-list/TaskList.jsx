import { TaskItemContainer } from "../task-item/TaskItemContainer";
import classes from "./taskList.module.scss";
import { useState, useContext } from "react";
import { TaskContext } from "../../../../context/TaskContext";
import { getSortedTasks } from "../../../../utils/sort";
import { TasksSort } from "../../task-sort/TasksSort";

const TaskList = () => {
  const { tasks } = useContext(TaskContext);
  const [sortParams, setSortParams] = useState({
    field: "none",
    order: "none",
  });

  const sortedTasks = getSortedTasks(tasks, sortParams.field, sortParams.order);

  return (
    <div>
      <div className={classes.sortContainer}>
        <TasksSort sortParams={sortParams} onSortChange={setSortParams} />
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

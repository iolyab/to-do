import { TaskItem } from "../task-item/TaskItem";
import classes from "./taskList.module.scss";

const TaskList = ({ tasks, deleteTask }) => {
  return (
    <ul className={classes.taskListContainer}>
      {tasks.map((task) => (
        <TaskItem key={task.id} deleteTask={deleteTask} task={task} />
      ))}
    </ul>
  );
};

export { TaskList };

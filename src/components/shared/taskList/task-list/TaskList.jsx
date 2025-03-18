import { TaskItem } from "../task-item/TaskItem";
import classes from "./taskList.module.scss";

const TaskList = ({ tasks, deleteTask, toggleComplete }) => {
  return (
    <ul className={classes.taskListContainer}>
      {tasks.map((task) => (
        <TaskItem
          key={task.id}
          deleteTask={deleteTask}
          toggleComplete={toggleComplete}
          task={task}
        />
      ))}
    </ul>
  );
};

export { TaskList };

import { TaskItemContainer } from "../task-item/TaskItemContainer";
import classes from "./taskList.module.scss";

const TaskList = ({ tasks, deleteTask, toggleComplete, updateTask }) => {
  return (
    <ul className={classes.taskListContainer}>
      {tasks.map((task) => (
        <TaskItemContainer
          key={task.id}
          task={task}
          deleteTask={deleteTask}
          toggleComplete={toggleComplete}
          updateTask={updateTask}
        />
      ))}
    </ul>
  );
};

export { TaskList };

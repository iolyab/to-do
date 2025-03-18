import { Button } from "../../button/Button";
import classes from "./taskItem.module.scss";

const TaskItem = ({ task, deleteTask, toggleComplete }) => {
  const handleDelete = () => deleteTask(task.id);
  const handleToggle = () => toggleComplete(task.id);
  return (
    <li className={classes.listItem}>
      <div className={classes.taskText}>
        <input
          type="checkbox"
          checked={task.completed}
          onChange={handleToggle}
          className={classes.checkbox}
        />
        <span className={task.completed ? classes.completed : ""}>
          {task.text}
        </span>
      </div>
      <div className={classes.actionsContainer}>
        <Button
          onClick={handleDelete}
          label="Delete"
          size="small"
          className={classes.customButton}
        />
      </div>
    </li>
  );
};

export { TaskItem };

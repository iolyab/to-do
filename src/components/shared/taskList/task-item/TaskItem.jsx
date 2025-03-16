import { Button } from "../../button/Button";
import classes from "./taskItem.module.scss";

const TaskItem = ({ task, deleteTask }) => {
  const handleDelete = () => deleteTask(task.id);
  return (
    <li className={classes.listItem}>
      <div className={classes.taskText}>{task.text}</div>
      <div className={classes.buttonContainer}>
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

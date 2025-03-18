import { Button } from "../../button/Button";
import classes from "./taskItem.module.scss";

const TaskItem = ({
  task,
  isEditing,
  editedText,
  handleDelete,
  handleToggle,
  handleEditClick,
  handleEdit,
  handleSaveEdit,
  handleCancelEdit,
}) => {
  return (
    <li className={classes.listItem}>
      <div className={classes.taskText}>
        <input
          type="checkbox"
          checked={task.completed}
          onChange={handleToggle}
          className={classes.checkbox}
        />
        {isEditing ? (
          <input
            type="text"
            value={editedText}
            onChange={handleEdit}
            className={classes.editInput}
          />
        ) : (
          <span className={task.completed ? classes.completed : ""}>
            {task.text}
          </span>
        )}
      </div>
      <div className={classes.actionsContainer}>
        {isEditing ? (
          <div>
            <Button
              onClick={handleSaveEdit}
              label="Save"
              size="small"
              className={classes.customButton}
            />
            <Button
              onClick={handleCancelEdit}
              label="Cancel"
              size="small"
              className={classes.customButton}
            />
          </div>
        ) : (
          <div>
            <Button
              onClick={handleEditClick}
              label="Edit"
              size="small"
              className={classes.customButton}
            />
            <Button
              onClick={handleDelete}
              label="Delete"
              size="small"
              className={classes.customButton}
            />
          </div>
        )}
      </div>
    </li>
  );
};

export { TaskItem };

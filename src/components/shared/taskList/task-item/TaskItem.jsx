import { Button } from "../../button/Button";
import { TaskPriority } from "../../taskPriority/TaskPriority";
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
  priorityClassName,
  onPriorityChange,
}) => {
  return (
    <li className={`${classes.listItem} ${priorityClassName}`}>
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
              variant="save"
              size="small"
              className={classes.customButton}
            />
            <Button
              onClick={handleCancelEdit}
              label="Cancel"
              variant="cancel"
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
            <div className={classes.priorityContainer}>
              <TaskPriority
                onPriorityChange={onPriorityChange}
                classes={classes}
              />
            </div>
            <Button
              onClick={handleDelete}
              label="Label"
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

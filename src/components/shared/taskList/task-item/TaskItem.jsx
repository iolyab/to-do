import { Button } from "../../button/Button";
import { TaskPriority } from "../../taskPriority/TaskPriority";
import { TaskLabels } from "../../taskLabels/TaskLabels";

import classes from "./taskItem.module.scss";

const TaskItem = ({
  task,
  isEditing,
  editedText,
  deleted,
  completed,
  handleEditClick,
  handleEditChange,
  handleSaveEdit,
  handleCancelEdit,
  priorityClassName,
  priorityChanged,
  labelsSet,
}) => {
  return (
    <li className={`${classes.listItem} ${priorityClassName}`}>
      <div className={classes.taskText}>
        <input
          type="checkbox"
          checked={task.completed}
          onChange={completed}
          className={classes.checkbox}
        />
        {isEditing ? (
          <input
            type="text"
            value={editedText}
            onChange={handleEditChange}
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
            <div className={classes.priorityContainer}>
              <TaskPriority
                priorityChanged={priorityChanged}
                classes={classes}
              />
            </div>
            <div className={classes.labelContainer}>
              <TaskLabels
                labelsSet={labelsSet}
                currentLabel={task.label}
                labels={task.labels || []}
                classes={classes}
              />
            </div>

            <Button
              onClick={deleted}
              size="small"
              icon={"/assets/green-trash-can-icon.png"}
              className={classes.customButton}
            />
          </div>
        )}
      </div>
    </li>
  );
};

export { TaskItem };

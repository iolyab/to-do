import { Button } from "../../button/Button";
import { TaskPriority } from "../../task-priority/TaskPriority";
import { TaskLabels } from "../../task-labels/TaskLabels";
import { TaskDeadline } from "../../task-deadline/TaskDeadline";
import dayjs from "dayjs";

import "react-datepicker/dist/react-datepicker.css";

import classes from "./taskItem.module.scss";

const priorityClassNames = {
  High: classes.highPriority,
  Medium: classes.mediumPriority,
  Low: classes.lowPriority,
};

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
  priorityChanged,
  labelsSet,
  deadlineSet,
  calculatedDeadline,
  id,
}) => {
  return (
    <li
      className={`${classes.listItem} ${priorityClassNames[task.priority]}  `}
    >
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
          <div className={classes.editingContainer}>
            <div className={classes.deadlineContainer}>
              <TaskDeadline
                deadline={task.deadline}
                deadlineSet={deadlineSet}
                Button={Button}
                classes={classes}
              />
            </div>
            <div className={classes.labelContainer}>
              <TaskLabels
                labelsSet={labelsSet}
                currentLabel={task.label}
                labels={task.labels || []}
                id={id}
                classes={classes}
              />
            </div>
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
          <div className={classes.taskItemsContainer}>
            <div className={classes.taskActions}>
              <Button
                onClick={handleEditClick}
                label="Edit"
                size="small"
                className={classes.customButton}
              />
              <div className={classes.priorityContainer}>
                <TaskPriority
                  key={task.id}
                  priorityChanged={priorityChanged}
                  currentPriority={task.priority}
                />
              </div>

              <Button
                onClick={deleted}
                size="small"
                icon={"/assets/green-trash-can-icon.png"}
                className={classes.customButton}
              />
            </div>
            <div className={classes.taskLabels}>
              {task.deadline && (
                <p className={classes.taskDeadline}>
                  📅 {""}
                  {calculatedDeadline(task)}
                </p>
              )}

              {task.labels && task.labels.length > 0 && (
                <div className={classes.labelList}>
                  {task.labels.map((label, index) => (
                    <span key={index} className={classes.labelTag}>
                      {label}
                      {index < task.labels.length}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </li>
  );
};

export { TaskItem };

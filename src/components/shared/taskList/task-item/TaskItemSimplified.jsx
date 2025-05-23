import React from "react";
import classes from "./taskItem.module.scss";
import { Button } from "../../button/Button";
import { TaskPriority } from "../../task-priority/TaskPriority";
import { TaskDeadline } from "../../task-deadline/TaskDeadline";
import { TaskLabels } from "../../task-labels/TaskLabels";

const priorityClassNames = {
  High: classes.highPriority,
  Medium: classes.mediumPriority,
  Low: classes.lowPriority,
};

const TaskItemSimplified = ({
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
  isSimplified,
  isOpen,
  handleOpen,
  loading,
}) => {
  return (
    <li
      className={`${classes.listItem} ${priorityClassNames[task.priority]} ${
        isSimplified ? classes.simplifiedItem : ""
      }`}
    >
      <div className={classes.taskTextSimplified}>
        <div className={classes.taskTopRowSimplified}>
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
        <div className={classes.taskLabelsSimplified}>
          {calculatedDeadline() && (
            <p className={classes.taskDeadline}>📅 {calculatedDeadline()}</p>
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

      <div className={classes.actionsContainer}>
        <Button
          onClick={handleOpen}
          label="&hellip;"
          variant="elseButton"
          size="small"
          className={classes.customButton}
        />
      </div>

      {isOpen &&
        (isEditing ? (
          <div className={classes.editingDropdown}>
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
              icon={"/assets/save.png"}
              variant="save"
              disabled={loading}
              loading={loading}
              size="small"
              className={classes.customButton}
            />
            <Button
              onClick={handleCancelEdit}
              icon={"/assets/cancel.png"}
              variant="cancel"
              size="small"
              className={classes.customButton}
            />
          </div>
        ) : (
          <div className={classes.taskItemsContainerSimplified}>
            <div className={classes.taskActionsSimplified}>
              <Button
                onClick={handleEditClick}
                icon={"/assets/edit.png"}
                size="small"
                className={classes.customButton}
              />

              <div className={classes.priorityContainer}>
                <TaskPriority
                  key={task.id}
                  priorityChanged={priorityChanged}
                  icon={"/assets/priority.png"}
                />
              </div>

              <Button
                onClick={deleted}
                size="small"
                icon={"/assets/delete.png"}
                className={classes.customButton}
              />
            </div>
          </div>
        ))}
    </li>
  );
};

export { TaskItemSimplified };

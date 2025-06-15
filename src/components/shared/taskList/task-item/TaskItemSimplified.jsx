import React from "react";
import classes from "./taskItem.module.scss";
import { Btn } from "../../button/Button";
import { TaskPriority } from "../../task-priority/TaskPriority";
import { TaskDeadline } from "../../task-deadline/TaskDeadline";
import { TaskLabels } from "../../task-labels/TaskLabels";
import { Input } from "../../input/Input";
import { Checkbox } from "@mui/material";

const priorityClassNames = {
  High: classes.High,
  Medium: classes.Medium,
  Low: classes.Low,
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
  isCompletingTask,
}) => {
  return (
    <li
      className={`${classes.listItem} ${priorityClassNames[task.priority]} ${
        isSimplified ? classes.simplifiedItem : ""
      }`}
    >
      <div className={classes.taskTextSimplified}>
        <div className={classes.taskTopRowSimplified}>
          <Checkbox
            checked={task.completed}
            onChange={completed}
            className={classes.checkbox}
            size="small"
            disabled={isCompletingTask}
          />

          {isEditing ? (
            <Input
              value={editedText}
              handleChange={handleEditChange}
              variant="edit"
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
        <Btn
          onClick={handleOpen}
          label="&hellip;"
          variant="elseButton"
          size="small"
          className={classes.customButton}
          sx={{ padding: "10px 10px" }}
        />
      </div>

      {isOpen &&
        (isEditing ? (
          <div className={classes.editingDropdown}>
            <div className={classes.deadlineContainer}>
              <TaskDeadline
                deadline={task.deadline}
                deadlineSet={deadlineSet}
                Btn={Btn}
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
            <Btn
              onClick={handleSaveEdit}
              icon={"/assets/save.png"}
              variant="save"
              disabled={loading}
              loading={loading}
              size="small"
              className={classes.customButton}
            />
            <Btn
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
              <Btn
                onClick={handleEditClick}
                icon={"/assets/edit.png"}
                size="small"
                className={classes.customButton}
                sx={{ backgroundColor: "white" }}
              />

              <div className={classes.priorityContainer}>
                <TaskPriority
                  key={task.id}
                  priorityChanged={priorityChanged}
                  icon={"/assets/priority.png"}
                />
              </div>

              <Btn
                onClick={deleted}
                size="small"
                icon={"/assets/delete.png"}
                className={classes.customButton}
                sx={{ backgroundColor: "white" }}
              />
            </div>
          </div>
        ))}
    </li>
  );
};

export { TaskItemSimplified };

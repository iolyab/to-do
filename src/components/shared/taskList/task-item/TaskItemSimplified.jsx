import React from "react";
import classes from "./taskItem.module.scss";
import { Button } from "../../button/Button";
import { useState } from "react";
import { TaskPriority } from "../../task-priority/TaskPriority";
import { TaskDeadline } from "../../task-deadline/TaskDeadline";
import { TaskLabels } from "../../task-labels/TaskLabels";
import dayjs from "dayjs";

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
  id,
  isSimplified,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleDropdownClick = () => {
    setIsOpen((prev) => !prev);
  };
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
          {task.deadline && (
            <p className={classes.taskDeadline}>
              📅 {""}
              {(() => {
                const today = dayjs();
                const deadline = dayjs(task.deadline);

                if (deadline.isSame(today, "day")) return "Today";
                if (deadline.isSame(today.add(1, "day"), "day"))
                  return "Tomorrow";
                return deadline.format("MM-DD");
              })()}
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

      <div className={classes.actionsContainer}>
        <Button
          onClick={handleDropdownClick}
          label="..."
          variant="edit"
          size="small"
          className={classes.customElseButton}
        />

        {isOpen && (
          <div className={classes.dropDownMenuSimplified}>
            {isEditing ? (
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
                <div className={classes.taskActionsSimplified}>
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
              </div>
            )}
          </div>
        )}
      </div>
    </li>
  );
};

export { TaskItemSimplified };

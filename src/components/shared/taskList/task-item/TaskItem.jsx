import { Btn } from "../../button/Button";
import { TaskPriority } from "../../task-priority/TaskPriority";
import { TaskLabels } from "../../task-labels/TaskLabels";
import { TaskDeadline } from "../../task-deadline/TaskDeadline";
import { Input } from "../../input/Input";
import Checkbox from "@mui/material/Checkbox";

import "react-datepicker/dist/react-datepicker.css";

import classes from "./taskItem.module.scss";

const priorityClassNames = {
  High: classes.High,
  Medium: classes.Medium,
  Low: classes.Low,
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
  handleStartChange,
  handleEndChange,
  startDate,
  endDate,
  calculatedDeadline,
  id,
  isUpdatingTask,
  isUpdatingPriority,
  isDeletingTask,
  isCompletingTask,
}) => {
  return (
    <li
      className={`${classes.listItem} ${priorityClassNames[task.priority]}  `}
    >
      <div className={classes.taskText}>
        <div className={classes.checkboxWithSpinner}>
          <Checkbox
            checked={task.completed}
            onChange={completed}
            className={classes.checkbox}
            size="small"
            disabled={isCompletingTask}
          />
          {isCompletingTask && <span className={classes.spinner}></span>}
        </div>
        {isEditing ? (
          <Input
            value={editedText}
            handleChange={handleEditChange}
            variant="edit"
            className={classes.editInput}
          />
        ) : (
          <div>
            <span className={task.completed ? classes.completed : ""}>
              {task.text}
            </span>
            {task.labels && task.labels.length > 0 && (
              <div className={classes.labelList}>
                {task.labels.map((label, index) => (
                  <span key={index} className={classes.labelTag}>
                    #{label}
                    {index < task.labels.length}
                  </span>
                ))}
              </div>
            )}
          </div>
        )}
      </div>

      <div className={classes.actionsContainer}>
        {isEditing ? (
          <div className={classes.editingContainer}>
            <div className={classes.deadlineContainer}>
              <TaskDeadline
                start={startDate}
                end={endDate}
                onStartChange={handleStartChange}
                onEndChange={handleEndChange}
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
              size="small"
              disabled={isUpdatingTask}
              pending={isUpdatingTask}
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
          <div className={classes.taskItemsContainer}>
            <div className={classes.taskActions}>
              <div className={classes.hoveredTaskActions}>
                <Btn
                  onClick={handleEditClick}
                  icon={"/assets/edit.png"}
                  size="small"
                  color="secondary"
                  className={classes.customButton}
                />
                <Btn
                  onClick={deleted}
                  size="small"
                  icon={"/assets/delete.png"}
                  disabled={isDeletingTask}
                  pending={isDeletingTask}
                  color="secondary"
                  className={classes.customButton}
                />
              </div>
              <div className={classes.priorityContainer}>
                <TaskPriority
                  key={task.id}
                  priorityChanged={priorityChanged}
                  currentPriority={task.priority}
                  disabled={isUpdatingPriority}
                  isUpdatingPriority={isUpdatingPriority}
                />
              </div>
            </div>
            <div className={classes.taskLabels}>
              {calculatedDeadline() && (
                <p className={classes.taskDeadline}>
                  📅 {calculatedDeadline()}
                </p>
              )}
            </div>
          </div>
        )}
      </div>
    </li>
  );
};

export { TaskItem };

import { useState } from "react";
import { TaskItem } from "./TaskItem";
import { TaskItemSimplified } from "./TaskItemSimplified";
import { getChangedDeadline } from "../../../../utils/date";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteTask,
  completeTask,
  updateTaskPriority,
  updateTaskLabels,
  editTask,
} from "../../../../store/tasks/actions";

const TaskItemContainer = ({ task, classes, id, isSimplified }) => {
  const dispatch = useDispatch();

  const [isEditing, setIsEditing] = useState(false);
  const [editedText, setEditedText] = useState(task.text);
  const [startDate, setStartDate] = useState();
  const [endDate, setEndDate] = useState();
  const [isOpen, setIsOpen] = useState(false);

  const isDeletingTask = useSelector(
    (state) =>
      state.tasks.loading &&
      state.tasks.loadingContext === "deleteTask" &&
      state.tasks.loadingId === task.id
  );

  const isCompletingTask = useSelector(
    (state) =>
      state.tasks.loading &&
      state.tasks.loadingContext === "completeTask" &&
      state.tasks.loadingId === task.id
  );

  const isUpdatingTask = useSelector(
    (state) =>
      state.tasks.loading &&
      state.tasks.loadingContext === "editTask" &&
      state.tasks.loadingId === task.id
  );

  const isUpdatingPriority = useSelector(
    (state) =>
      state.tasks.loading &&
      state.tasks.loadingContext === "updateTaskPriority" &&
      state.tasks.loadingId === task.id
  );

  const deleted = () => dispatch(deleteTask(task.id));

  const completed = () => dispatch(completeTask(task.id));

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleEditChange = (e) => setEditedText(e.target.value);

  const handleSaveEdit = () => {
    dispatch(editTask(task.id, editedText, startDate, endDate))
      .then(() => {
        setIsEditing(false);
      })
      .catch(() => {});
  };

  const handleCancelEdit = () => {
    setEditedText(task.text);

    setIsEditing(false);
  };

  const priorityChanged = (newPriority) => {
    dispatch(updateTaskPriority(task.id, newPriority));
  };

  const labelsSet = (newLabel) => {
    dispatch(updateTaskLabels(task.id, newLabel));
  };

  const handleStartChange = (date) => {
    setStartDate(date);
    if (date > endDate) setEndDate(date);
  };

  const handleEndChange = (date) => {
    setEndDate(date);
  };

  const calculatedDeadline = () => {
    if (!task.start) return null;
    return getChangedDeadline(task.start);
  };

  const handleOpen = () => {
    setIsOpen((prev) => !prev);
  };

  return !isSimplified ? (
    <TaskItem
      task={task}
      isEditing={isEditing}
      editedText={editedText}
      deleted={deleted}
      completed={completed}
      handleEditClick={handleEditClick}
      handleEditChange={handleEditChange}
      handleSaveEdit={handleSaveEdit}
      handleCancelEdit={handleCancelEdit}
      priorityChanged={priorityChanged}
      labelsSet={labelsSet}
      handleStartChange={handleStartChange}
      handleEndChange={handleEndChange}
      startDate={startDate}
      endDate={endDate}
      calculatedDeadline={calculatedDeadline}
      id={id}
      classes={classes}
      isSimplified={isSimplified}
      isUpdatingTask={isUpdatingTask}
      isUpdatingPriority={isUpdatingPriority}
      isDeletingTask={isDeletingTask}
      isCompletingTask={isCompletingTask}
    />
  ) : (
    <TaskItemSimplified
      task={task}
      isEditing={isEditing}
      editedText={editedText}
      deleted={deleted}
      completed={completed}
      handleEditClick={handleEditClick}
      handleEditChange={handleEditChange}
      handleSaveEdit={handleSaveEdit}
      handleCancelEdit={handleCancelEdit}
      priorityChanged={priorityChanged}
      labelsSet={labelsSet}
      handleStartChange={handleStartChange}
      handleEndChange={handleEndChange}
      startDate={startDate}
      endDate={endDate}
      calculatedDeadline={calculatedDeadline}
      id={id}
      classes={classes}
      isSimplified={isSimplified}
      isOpen={isOpen}
      handleOpen={handleOpen}
      lisUpdatingTask={isUpdatingTask}
      isUpdatingPriority={isUpdatingPriority}
      isDeletingTask={isDeletingTask}
      isCompletingTask={isCompletingTask}
    />
  );
};

export { TaskItemContainer };

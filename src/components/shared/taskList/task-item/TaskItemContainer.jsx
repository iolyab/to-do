import { useState } from "react";
import { TaskItem } from "./TaskItem";
import { TaskItemSimplified } from "./TaskItemSimplified";
import { getChangedDeadline } from "../../../../utils/date";
import { useDispatch } from "react-redux";
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
  const [isDeleting, setIsDeleting] = useState(false);
  const [isCompleting, setIsCompleting] = useState(false);
  const [isUpdating, setIsUpdating] = useState(false);
  const [isUpdatingPriority, setIsUpdatingPriority] = useState(false);

  const deleted = () => {
    setIsDeleting(true);
    dispatch(deleteTask(task.id)).finally(() => {
      setIsDeleting(false);
    });
  };

  const completed = () => {
    setIsCompleting(true);
    dispatch(completeTask(task.id)).finally(() => {
      setIsCompleting(false);
    });
  };

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleEditChange = (e) => setEditedText(e.target.value);

  const handleSaveEdit = () => {
    setIsUpdating(true);
    dispatch(editTask(task.id, editedText, startDate, endDate))
      .then(() => {
        setIsEditing(false);
      })
      .catch(() => {})
      .finally(() => {
        setIsUpdating(false);
      });
  };

  const handleCancelEdit = () => {
    setEditedText(task.text);

    setIsEditing(false);
  };

  const priorityChanged = (newPriority) => {
    setIsUpdatingPriority(true);
    dispatch(updateTaskPriority(task.id, newPriority)).finally(() => {
      setIsUpdatingPriority(false);
    });
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
      isUpdatingTask={isUpdating}
      isDeletingTask={isDeleting}
      isCompletingTask={isCompleting}
      isUpdatingPriority={isUpdatingPriority}
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
      isUpdatingTask={isUpdating}
      isDeletingTask={isDeleting}
      isCompletingTask={isCompleting}
      isUpdatingPriority={isUpdatingPriority}
    />
  );
};

export { TaskItemContainer };

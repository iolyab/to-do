import { useState } from "react";
import { TaskItem } from "./TaskItem";
import { useTasks } from "../../../../hooks/useTasks";
import { TaskItemSimplified } from "./TaskItemSimplified";
import dayjs from "dayjs";

const TaskItemContainer = ({ task, classes, id, isSimplified }) => {
  const {
    handleDelete,
    handleCompleted,
    handleEdit,
    handlePriority,
    handleLabels,
  } = useTasks();

  const [isEditing, setIsEditing] = useState(false);
  const [editedText, setEditedText] = useState(task.text);
  const [startDate, setStartDate] = useState();
  const [endDate, setEndDate] = useState();

  const deleted = () => handleDelete(task.id);
  const completed = () => handleCompleted(task.id);
  const handleEditClick = () => {
    setIsEditing(true);
  };
  const handleEditChange = (e) => setEditedText(e.target.value);

  const handleSaveEdit = () => {
    if (editedText.trim().length > 1) {
      handleEdit(task.id, editedText, startDate, endDate);
      setIsEditing(false);
    }
  };

  const handleCancelEdit = () => {
    setEditedText(task.text);

    setIsEditing(false);
  };

  const priorityChanged = (newPriority) => {
    handlePriority(task.id, newPriority);
  };

  const labelsSet = (newLabel) => {
    handleLabels(task.id, newLabel);
  };

  const handleStartChange = (date) => {
    setStartDate(date);
    if (date > endDate) setEndDate(date);
  };

  const handleEndChange = (date) => {
    setEndDate(date);
  };

  const [isOpen, setIsOpen] = useState(false);

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
      id={id}
      classes={classes}
      isSimplified={isSimplified}
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
      id={id}
      classes={classes}
      isSimplified={isSimplified}
      isOpen={isOpen}
      handleOpen={handleOpen}
    />
  );
};

export { TaskItemContainer };

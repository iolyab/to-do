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
    handleDeadline,
  } = useTasks();

  const [isEditing, setIsEditing] = useState(false);
  const [editedText, setEditedText] = useState(task.text);

  const deleted = () => handleDelete(task.id);
  const completed = () => handleCompleted(task.id);
  const handleEditClick = () => {
    setIsEditing(true);
  };
  const handleEditChange = (e) => setEditedText(e.target.value);
  const handleSaveEdit = () => {
    if (editedText.trim().length > 1) {
      handleEdit(task.id, editedText);
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

  const deadlineSet = (newDeadline) => {
    handleDeadline(task.id, newDeadline);
  };

  function calculatedDeadline(task) {
    const today = dayjs();
    const deadline = dayjs(task.deadline);

    if (deadline.isSame(today, "day")) return "Today";
    if (deadline.isSame(today.add(1, "day"), "day")) return "Tomorrow";
    return deadline.format("MM-DD");
  }

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
      deadlineSet={deadlineSet}
      calculatedDeadline={calculatedDeadline}
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
      deadlineSet={deadlineSet}
      calculatedDeadline={calculatedDeadline}
      id={id}
      classes={classes}
      isSimplified={isSimplified}
    />
  );
};

export { TaskItemContainer };

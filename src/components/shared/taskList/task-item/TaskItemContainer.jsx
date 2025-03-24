import { useState } from "react";
import { TaskItem } from "./TaskItem";

const TaskItemContainer = ({
  task,
  handleDelete,
  handleCompleted,
  handleEdit,
  handlePriority,
  classes,
}) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedText, setEditedText] = useState(task.text);
  const [priorityClassName, setPriorityClassName] = useState(task.priority);

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

  const priorityChanged = (newPriorityClassName) => {
    setPriorityClassName(newPriorityClassName);
    handlePriority(task.id, newPriorityClassName);
  };

  return (
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
      priorityClassName={priorityClassName}
      priorityChanged={priorityChanged}
      classes={classes}
    />
  );
};

export { TaskItemContainer };

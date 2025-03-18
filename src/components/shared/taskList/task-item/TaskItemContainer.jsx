import { useState } from "react";
import { TaskItem } from "./TaskItem";

const TaskItemContainer = ({
  task,
  deleteTask,
  toggleComplete,
  updateTask,
}) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedText, setEditedText] = useState(task.text);

  const handleDelete = () => deleteTask(task.id);
  const handleToggle = () => toggleComplete(task.id);
  const handleEditClick = () => {
    setIsEditing(true);
  };
  const handleEdit = (e) => setEditedText(e.target.value);
  const handleSaveEdit = () => {
    if (editedText.trim().length > 1) {
      updateTask(task.id, editedText);
      setIsEditing(false);
    }
  };
  const handleCancelEdit = () => {
    setEditedText(task.text);
    setIsEditing(false);
  };
  return (
    <TaskItem
      task={task}
      isEditing={isEditing}
      editedText={editedText}
      handleDelete={handleDelete}
      handleToggle={handleToggle}
      handleEditClick={handleEditClick}
      handleEdit={handleEdit}
      handleSaveEdit={handleSaveEdit}
      handleCancelEdit={handleCancelEdit}
    />
  );
};

export { TaskItemContainer };

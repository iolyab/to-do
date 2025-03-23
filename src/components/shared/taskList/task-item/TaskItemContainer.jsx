import { useState } from "react";
import { TaskItem } from "./TaskItem";

const TaskItemContainer = ({
  task,
  deleteTask,
  toggleComplete,
  updateTask,
  classes,
}) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedText, setEditedText] = useState(task.text);
  const [priorityClassName, setPriorityClassName] = useState("");

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

  const handlePriorityChange = (newPriorityClassName) => {
    setPriorityClassName(newPriorityClassName);
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
      priorityClassName={priorityClassName}
      onPriorityChange={handlePriorityChange}
      classes={classes}
    />
  );
};

export { TaskItemContainer };

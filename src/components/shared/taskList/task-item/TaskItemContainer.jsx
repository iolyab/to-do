import { useState } from "react";
import { TaskItem } from "./TaskItem";

const TaskItemContainer = ({
  task,
  handleDelete,
  handleCompleted,
  handleEdit,
  handlePriority,
  handleLabels,
  classes,
}) => {
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
      priorityClassName={task.priority}
      priorityChanged={priorityChanged}
      labelsSet={labelsSet}
      classes={classes}
    />
  );
};

export { TaskItemContainer };

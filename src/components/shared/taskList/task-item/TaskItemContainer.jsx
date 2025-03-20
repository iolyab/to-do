import { useState } from "react";
import { TaskItem } from "./TaskItem";
import classes from "./taskItem.module.scss";

const TaskItemContainer = ({
  task,
  deleteTask,
  toggleComplete,
  updateTask,
}) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedText, setEditedText] = useState(task.text);
  const [isOpen, setIsOpen] = useState(false);
  const [priority, setPriority] = useState("Priority");
  const priorities = ["High", "Medium", "Low"];
  const [className, setClassName] = useState("");

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

  const handleIsOpen = () => {
    setIsOpen((prev) => !prev);
  };

  const handleSelect = (selectedPriority) => {
    setPriority(selectedPriority);
    if (selectedPriority === "High") {
      setClassName(classes.highPriority);
    } else if (selectedPriority === "Medium") {
      setClassName(classes.mediumPriority);
    } else {
      setClassName(classes.lowPriority);
    }
    setIsOpen(false);
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
      handleIsOpen={handleIsOpen}
      handleSelect={handleSelect}
      isOpen={isOpen}
      priority={priority}
      priorities={priorities}
      className={className}
    />
  );
};

export { TaskItemContainer };

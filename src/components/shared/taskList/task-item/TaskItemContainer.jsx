import { useState } from "react";
import { TaskItem } from "./TaskItem";
import { useTasks } from "../../../../hooks/useTasks";
import { TaskItemSimplified } from "./TaskItemSimplified";
import dayjs from "dayjs";
import { useDispatch } from "react-redux";
import {
  deleteTask,
  completeTask,
  editTask,
  updateTaskPriority,
  updateTaskLabels,
} from "../../../../store/tasks/actions";

const TaskItemContainer = ({ task, classes, id, isSimplified }) => {
  // const {
  //   handleDelete,
  //   handleCompleted,
  //   handleEdit,
  //   handlePriority,
  //   handleLabels,
  // } = useTasks();

  const dispatch = useDispatch();

  const [isEditing, setIsEditing] = useState(false);
  const [editedText, setEditedText] = useState(task.text);
  const [startDate, setStartDate] = useState();
  const [endDate, setEndDate] = useState();
  const [isOpen, setIsOpen] = useState(false);

  const deleted = () => dispatch(deleteTask(task.id));
  const completed = () => dispatch(completeTask(task.id));
  const handleEditClick = () => {
    setIsEditing(true);
  };
  const handleEditChange = (e) => setEditedText(e.target.value);

  const handleSaveEdit = () => {
    if (editedText.trim().length > 1) {
      dispatch(editTask(task.id, editedText, startDate, endDate));
      setIsEditing(false);
    }
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
    if (!task.start || !dayjs(task.start).isValid()) return "";

    const start = dayjs(task.start);
    const today = dayjs();
    const tomorrow = today.add(1, "day");

    if (start.isSame(today, "day")) return "Today";
    if (start.isSame(tomorrow, "day")) return "Tomorrow";
    return start.format("MMM D hA");
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
    />
  );
};

export { TaskItemContainer };

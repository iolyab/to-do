const TaskItem = ({ task, deleteTask }) => {
  const handleDelete = () => deleteTask(task.id);
  return (
    <li>
      {task.text}
      <button onClick={handleDelete}>Delete</button>
    </li>
  );
};

export { TaskItem };

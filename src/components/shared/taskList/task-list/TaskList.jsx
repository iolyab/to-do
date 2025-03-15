import { TaskItem } from "../task-item/TaskItem";

const TaskList = ({ tasks, deleteTask }) => {
  return (
    <ul>
      {tasks.map((task) => (
        <TaskItem key={task.id} deleteTask={deleteTask} task={task} />
      ))}
    </ul>
  );
};

export { TaskList };

import { TaskItem } from "../task-item/TaskItem";

const TaskList = ({ tasks }) => {
  return (
    <ul>
      {tasks.map((task) => {
        <TaskItem key={task.id} task={task} />;
      })}
    </ul>
  );
};

export { TaskList };

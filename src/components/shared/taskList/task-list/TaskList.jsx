import { TaskItemContainer } from "../task-item/TaskItemContainer";
import classes from "./taskList.module.scss";

const TaskList = ({
  tasks,
  handleDelete,
  handleCompleted,
  handleEdit,
  handlePriority,
}) => {
  return (
    <ul className={classes.taskListContainer}>
      {tasks.map((task) => (
        <TaskItemContainer
          key={task.id}
          task={task}
          handleDelete={handleDelete}
          handleCompleted={handleCompleted}
          handleEdit={handleEdit}
          handlePriority={handlePriority}
        />
      ))}
    </ul>
  );
};

export { TaskList };

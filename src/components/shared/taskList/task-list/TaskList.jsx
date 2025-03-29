import { TaskItemContainer } from "../task-item/TaskItemContainer";
import classes from "./taskList.module.scss";

const TaskList = ({
  tasks,
  handleDelete,
  handleCompleted,
  handleEdit,
  handlePriority,
  handleLabels,
  handleDeadline,
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
          handleLabels={handleLabels}
          handleDeadline={handleDeadline}
        />
      ))}
    </ul>
  );
};

export { TaskList };

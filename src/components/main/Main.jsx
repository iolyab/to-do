import classes from "./Main.module.scss";
import { Layout } from "../layout/Layout";
import { Title } from "../shared/title/Title";
import { CreateTask } from "../shared/createTask/CreateTask";
import { TaskListContainer } from "../shared/taskList/task-list/TaskListContainer";
import { useDispatch, useSelector } from "react-redux";
import { addTask } from "../../store/tasks/actions";
import { getTasks } from "../../store/tasks/selectors";
import { useState } from "react";

const Main = () => {
  const tasks = useSelector(getTasks);
  const dispatch = useDispatch();
  const [isAdding, setIsAdding] = useState(false);

  const handleAddTask = (taskText, startDate, endDate) => {
    setIsAdding(true);
    dispatch(addTask(taskText, startDate, endDate)).finally(() => {
      setIsAdding(false);
    });
  };

  return (
    <Layout>
      <div className={classes.main}>
        <div className={classes.customTitleStyle}>
          <Title />
        </div>
        <div className={classes.inputContainer}>
          <CreateTask onAddTask={handleAddTask} isAdding={isAdding} />
        </div>

        <div className={classes.tasksContainer}>
          <TaskListContainer tasks={tasks} />
        </div>
      </div>
    </Layout>
  );
};
export default Main;

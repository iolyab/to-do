import classes from "./Main.module.scss";
import { Layout } from "../layout/Layout";
import { Title } from "../shared/title/Title";
import { CreateTask } from "../shared/createTask/CreateTask";
import { TaskListContainer } from "../shared/taskList/task-list/TaskListContainer";
import { useDispatch } from "react-redux";
import { addTask } from "../../store/tasks/actions";

const Main = () => {
  const dispatch = useDispatch();

  const handleAddTask = (taskText, startDate, endDate) => {
    dispatch(addTask(taskText, startDate, endDate));
  };

  return (
    <Layout>
      <div className={classes.main}>
        <div className={classes.customTitleStyle}>
          <Title />
        </div>
        <div className={classes.inputContainer}>
          <CreateTask onAddTask={handleAddTask} />
        </div>

        <div className={classes.tasksContainer}>
          <TaskListContainer />
        </div>
      </div>
    </Layout>
  );
};
export default Main;

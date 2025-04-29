import classes from "./Main.module.scss";

import { Layout } from "../layout/Layout";
import { Title } from "../shared/title/Title";
import { CreateTask } from "../shared/createTask/CreateTask";
import { TaskList } from "../shared/taskList/task-list/TaskList";
import { useTasks } from "../../hooks/useTasks";

const Main = () => {
  const { tasks, addTask } = useTasks();

  return (
    <Layout>
      <div className={classes.main}>
        <div className={classes.customTitleStyle}>
          <Title />
        </div>
        <div className={classes.inputContainer}>
          <CreateTask onAddTask={addTask} />
        </div>

        <div className={classes.tasksContainer}>
          <TaskList tasks={tasks} />
        </div>
      </div>
    </Layout>
  );
};
export default Main;

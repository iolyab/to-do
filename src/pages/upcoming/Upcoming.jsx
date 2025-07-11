import React from "react";
import classes from "./Upcoming.module.scss";
import { Title } from "../../components/shared/title/Title";
import { Layout } from "../../components/layout/Layout";
import { TaskListContainer } from "../../components/shared/taskList/task-list/TaskListContainer";
import { useSelector } from "react-redux";
import { getTasks } from "../../store/tasks/selectors";

const Upcoming = () => {
  const tasks = useSelector(getTasks);

  return (
    <Layout>
      <div className={classes.container}>
        <Title />
        <div className={classes.priority}>
          <div className={classes.titleContainer}>
            <p className={classes.priorityTitle}>High priority</p>
          </div>
          <div className={classes.tasksContainer}>
            <TaskListContainer
              tasks={tasks.filter((task) => task.priority === "High")}
              isSimplified={true}
            />
          </div>
        </div>
        <div className={classes.priority}>
          <p className={classes.priorityTitle}>Medium priority</p>
          <div className={classes.tasksContainer}>
            <TaskListContainer
              tasks={tasks.filter((task) => task.priority === "Medium")}
              isSimplified={true}
            />
          </div>
        </div>
        <div className={classes.priority}>
          <p className={classes.priorityTitle}>Low priority</p>
          <div className={classes.tasksContainer}>
            <TaskListContainer
              tasks={tasks.filter((task) => task.priority === "Low")}
              isSimplified={true}
            />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Upcoming;

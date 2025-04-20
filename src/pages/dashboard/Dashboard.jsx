import React from "react";
import classes from "./Dashboard.module.scss";
import { Title } from "../../components/shared/title/Title";
import { Layout } from "../../components/layout/Layout";
import { useTasks } from "../../hooks/useTasks";
import { TaskList } from "../../components/shared/taskList/task-list/TaskList";

const Dashboard = () => {
  const { tasks } = useTasks();
  return (
    <Layout>
      <div className={classes.container}>
        <Title />
        <div className={classes.tasks}>
          <p className={classes.tasksTitle}>In progress</p>
          <TaskList
            tasks={tasks.filter((task) => !task.completed)}
            isSimplified
          />
        </div>
        <div className={classes.tasks}>
          <p className={classes.tasksTitle}>Completed</p>
          <TaskList
            tasks={tasks.filter((task) => task.completed)}
            isSimplified
          />
        </div>
        <div className={classes.workPersonalContainer}>
          <div className={classes.tasks}>
            <p className={classes.tasksTitle}>Work</p>
            <TaskList
              tasks={tasks.filter((task) => task.labels.includes("Work"))}
              isSimplified
            />
          </div>
          <div className={classes.tasks}>
            <p className={classes.tasksTitle}>Personal</p>
            <TaskList
              tasks={tasks.filter((task) => task.labels.includes("Personal"))}
              isSimplified
            />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Dashboard;

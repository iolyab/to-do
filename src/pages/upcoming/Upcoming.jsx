import React from "react";
import classes from "./Upcoming.module.scss";
import { Title } from "../../components/shared/title/Title";
import { Layout } from "../../components/layout/Layout";
import { TaskList } from "../../components/shared/taskList/task-list/TaskList";
import { useTasks } from "../../hooks/useTasks";

const Upcoming = () => {
  const { tasks } = useTasks();

  return (
    <Layout>
      <div className={classes.container}>
        <Title />
        <div className={classes.priority}>
          <p className={classes.priorityTitle}>High priority</p>
          <div className={classes.tasksContainer}>
            <TaskList
              tasks={tasks.filter((task) => task.priority === "High")}
            />
          </div>
        </div>
        <div className={classes.priority}>
          <p className={classes.priorityTitle}>Medium priority</p>
          <div className={classes.tasksContainer}>
            <TaskList
              tasks={tasks.filter((task) => task.priority === "Medium")}
            />
          </div>
        </div>
        <div className={classes.priority}>
          <p className={classes.priorityTitle}>Low priority</p>
          <div className={classes.tasksContainer}>
            <TaskList tasks={tasks.filter((task) => task.priority === "Low")} />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Upcoming;

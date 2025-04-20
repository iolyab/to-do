import React from "react";
import classes from "./Dashboard.module.scss";
import { useState, useEffect } from "react";
import { Title } from "../../components/shared/title/Title";
import { Layout } from "../../components/layout/Layout";
import { useTasks } from "../../hooks/useTasks";
import { TaskList } from "../../components/shared/taskList/task-list/TaskList";
import { Button } from "../../components/shared/button/Button";
import { getLabels } from "../../services/labels-service";

const Dashboard = () => {
  const [availableLabels, setAvailableLabels] = useState([]);

  useEffect(() => {
    const labels = getLabels();
    setAvailableLabels(labels);
  }, []);

  const { tasks } = useTasks();

  const [currentIndex, setCurrentIndex] = useState(1);

  const handleSwitchContainerForward = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % availableLabels.length);
  };

  const handleSwitchContainerBackward = () => {
    setCurrentIndex(
      (prevIndex) =>
        (prevIndex - 1 + availableLabels.length) % availableLabels.length
    );
  };

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
            <div className={classes.switchContainer}>
              <Button
                onClick={handleSwitchContainerBackward}
                label="&lt;"
                variant="arrowButton"
                size="small"
                className={classes.customButton}
              />
              <p className={classes.tasksTitle}>
                {availableLabels[currentIndex]}
              </p>
              <Button
                onClick={handleSwitchContainerForward}
                label="&gt;"
                variant="arrowButton"
                size="small"
                className={classes.customButton}
              />
            </div>
            <TaskList
              tasks={tasks.filter((task) =>
                task.labels.includes(availableLabels[currentIndex])
              )}
              isSimplified
            />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Dashboard;

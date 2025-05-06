import React from "react";
import classes from "./Dashboard.module.scss";
import { useState, useEffect } from "react";
import { Title } from "../../components/shared/title/Title";
import { Layout } from "../../components/layout/Layout";
import { useTasks } from "../../hooks/useTasks";
import { TaskListContainer } from "../../components/shared/taskList/task-list/TaskListContainer";
import { Button } from "../../components/shared/button/Button";
import { getLabels } from "../../services/labels-service";

const Dashboard = () => {
  const [availableLabels, setAvailableLabels] = useState([]);
  const { tasks } = useTasks();
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const labels = getLabels();
    const filtered = labels.filter((label) => label !== "Work");
    setAvailableLabels(filtered);
  }, []);

  const handleSwitchContainerForward = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % availableLabels.length);
  };

  const handleSwitchContainerBackward = () => {
    setCurrentIndex(
      (prevIndex) =>
        (prevIndex - 1 + availableLabels.length) % availableLabels.length
    );
  };

  const filteredTasks = tasks.reduce(
    (acc, task) => {
      if (!task.completed) {
        acc.inProgress.push(task);
      } else {
        acc.completed.push(task);
      }

      if (task.labels.includes("Work")) {
        acc.work.push(task);
      }

      if (task.labels.includes(availableLabels[currentIndex])) {
        acc.currLabel.push(task);
      }

      return acc;
    },
    { inProgress: [], completed: [], work: [], currLabel: [] }
  );

  return (
    <Layout>
      <div className={classes.container}>
        <Title />
        <div className={classes.tasks}>
          <p className={classes.tasksTitle}>In progress</p>
          <TaskListContainer tasks={filteredTasks.inProgress} isSimplified />
        </div>
        <div className={classes.tasks}>
          <p className={classes.tasksTitle}>Completed</p>
          <TaskListContainer tasks={filteredTasks.completed} isSimplified />
        </div>
        <div className={classes.workPersonalContainer}>
          <div className={classes.tasks}>
            <p className={classes.tasksTitle}>Work</p>
            <TaskListContainer tasks={filteredTasks.work} isSimplified />
          </div>
          <div className={classes.tasks}>
            <div className={classes.switchContainer}>
              <Button
                onClick={handleSwitchContainerBackward}
                label="&lt;"
                variant="arrowButton"
                size="small"
                className={`${classes.customButton} ${
                  currentIndex === 0 ? classes.disabled : ""
                }`}
                disabled={currentIndex === 0}
              />
              <p className={classes.tasksTitle}>
                {availableLabels[currentIndex]}
              </p>
              <Button
                onClick={handleSwitchContainerForward}
                label="&gt;"
                variant="arrowButton"
                size="small"
                className={`${classes.customButton} ${
                  currentIndex === availableLabels.length - 1
                    ? classes.disabled
                    : ""
                }`}
                disabled={currentIndex === availableLabels.length - 1}
              />
            </div>
            <TaskListContainer tasks={filteredTasks.currLabel} isSimplified />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Dashboard;

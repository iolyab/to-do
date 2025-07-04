import classes from "./Dashboard.module.scss";
import { useState, useEffect } from "react";
import { Title } from "../../components/shared/title/Title";
import { Layout } from "../../components/layout/Layout";
import { TaskListContainer } from "../../components/shared/taskList/task-list/TaskListContainer";
import { Btn } from "../../components/shared/button/Button";
import { getLabels } from "../../services/labels-service";
import { useSelector } from "react-redux";
import { getTasks } from "../../store/tasks/selectors";

const Dashboard = () => {
  const tasks = useSelector(getTasks);
  const [availableLabels, setAvailableLabels] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const labels = getLabels();
    const filtered = labels.filter((label) => label !== "Work");
    setAvailableLabels(filtered);
    console.log(filtered);
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

      const taskLabels = Array.isArray(task.labels) ? task.labels : [];

      if (taskLabels.includes("Work")) {
        acc.work.push(task);
      }

      if (taskLabels.includes(availableLabels[currentIndex])) {
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
          <div className={classes.taskList}>
            <TaskListContainer tasks={filteredTasks.inProgress} isSimplified />
          </div>
        </div>
        <div className={classes.tasks}>
          <p className={classes.tasksTitle}>Completed</p>
          <div className={classes.taskList}>
            <TaskListContainer tasks={filteredTasks.completed} isSimplified />
          </div>
        </div>
        <div className={classes.workPersonalContainer}>
          <div className={classes.tasksLabels}>
            <p className={classes.tasksTitle}>Work</p>
            <div className={classes.taskList}>
              <TaskListContainer tasks={filteredTasks.work} isSimplified />
            </div>
          </div>
          <div className={classes.tasksLabels}>
            <div className={classes.switchContainer}>
              <Btn
                onClick={handleSwitchContainerBackward}
                label="&lt;"
                variant="arrowButton"
                size="extraSmall"
                className={`${classes.customButton} ${
                  currentIndex === 0 ? classes.disabled : ""
                }`}
                disabled={currentIndex === 0}
              />
              <p className={classes.tasksTitle}>
                {availableLabels[currentIndex]}
              </p>
              <Btn
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
            <div className={classes.taskList}>
              <TaskListContainer tasks={filteredTasks.currLabel} isSimplified />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Dashboard;

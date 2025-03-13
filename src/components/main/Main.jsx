import React, { useState } from "react";
import classes from "./Main.module.scss";
import { Layout } from "../layout/Layout";
import { Title } from "../shared/title/Title";
import { InputField } from "../shared/inputField/InputField";

const Main = () => {
  const [tasks, setTasks] = useState([]);

  const addTask = (task) => {
    setTasks([...tasks, { id: Math.random() + 1, text: task }]);
    console.log(`Main got the task`);
  };

  return (
    <Layout>
      <div className={classes.main}>
        <Title titleHeadClassName={classes.customTitleStyle} />
        <div className={classes.inputContainer}>
          <InputField onAddTask={addTask} />
        </div>
        <div className={classes.tasksContainer}>
          <div className="tasks-to-do"></div>
        </div>
      </div>
    </Layout>
  );
};
export default Main;

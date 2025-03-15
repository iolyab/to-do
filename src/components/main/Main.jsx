import React, { useState } from "react";
import classes from "./Main.module.scss";
import { Layout } from "../layout/Layout";
import { Title } from "../shared/title/Title";
import { InputField } from "../shared/inputField/InputField";
import { TaskList } from "../shared/taskList/task-list/TaskList";

const Main = () => {
  const [tasks, setTasks] = useState([]);

  const addTask = (taskText) => {
    const newTask = {
      id: Math.random() + 1,
      text: taskText,
    };
    setTasks([...tasks, newTask]);
    console.log(`Main got the task`);
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
    console.log("Task is deleted");
  };

  return (
    <Layout>
      <div className={classes.main}>
        <Title titleHeadClassName={classes.customTitleStyle} />
        <div className={classes.inputContainer}>
          <InputField onAddTask={addTask} />
        </div>
        <div className={classes.tasksContainer}>
          <TaskList
            tasks={tasks}
            deleteTask={deleteTask}
            className="tasks-to-do"
          />
        </div>
      </div>
    </Layout>
  );
};
export default Main;

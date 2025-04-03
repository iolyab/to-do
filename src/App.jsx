import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useState, useEffect } from "react";
import Login from "./pages/login/Login";
import Signup from "./pages/signup/Signup";
import Main from "./components/main/Main";
import Dashboard from "./pages/dashboard/Dashboard";
import Upcoming from "./pages/upcoming/Upcoming";

const App = () => {
  const [tasks, setTasks] = useState(() => {
    const savedTasks = localStorage.getItem("tasks");
    return savedTasks ? JSON.parse(savedTasks) : [];
  });

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (taskText, deadline) => {
    const newTask = {
      id: Math.random() + 1,
      text: taskText,
      completed: false,
      priority: null,
      label: "Labels",
      labels: [],
      deadline: deadline,
    };
    setTasks((prevTasks) => [...prevTasks, newTask]);
  };

  const handleDelete = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const handleCompleted = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const handleEdit = (id, newText) => {
    updateTask({ id, text: newText });
  };

  const handlePriority = (id, newPriority) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === id
          ? {
              ...task,
              priority: newPriority.name,
              priorityClass: newPriority.className,
            }
          : task
      )
    );
  };

  const handleLabels = (id, newLabel) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === id
          ? {
              ...task,
              label: newLabel,
              labels: task.labels.includes(newLabel)
                ? task.labels
                : [...task.labels, newLabel],
            }
          : task
      )
    );
  };

  const handleDeadline = (id, date) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === id ? { ...task, deadline: date } : task
      )
    );
  };

  const updateTask = (newFields) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === newFields.id ? { ...task, ...newFields } : task
      )
    );
  };

  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/">
          <Route
            index
            element={
              <Main
                tasks={tasks}
                addTask={addTask}
                handleDelete={handleDelete}
                handleCompleted={handleCompleted}
                handleEdit={handleEdit}
                handlePriority={handlePriority}
                handleLabels={handleLabels}
                handleDeadline={handleDeadline}
              />
            }
          />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/upcoming" element={<Upcoming />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;

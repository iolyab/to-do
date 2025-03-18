import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useState } from "react";
import Login from "./pages/login/Login";
import Signup from "./pages/signup/Signup";
import Main from "./components/main/Main";
import Dashboard from "./pages/dashboard/Dashboard";
import Upcoming from "./pages/upcoming/Upcoming";

const App = () => {
  const [tasks, setTasks] = useState([]);

  const addTask = (taskText) => {
    const newTask = {
      id: Math.random() + 1,
      text: taskText,
      completed: false,
    };
    setTasks([...tasks, newTask]);
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const toggleComplete = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
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
                deleteTask={deleteTask}
                toggleComplete={toggleComplete}
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

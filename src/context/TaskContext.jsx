import React from "react";
import { createContext } from "react";
import { useState, useEffect } from "react";

export const TaskContext = createContext();

export function TaskProvider({ children }) {
  //   const [taskList, setTaskList] = useState([]);

  const [tasks, setTasks] = useState(() => {
    try {
      const savedTasks = localStorage.getItem("tasks");
      if (savedTasks) {
        return JSON.parse(savedTasks);
      }
      return [];
    } catch (error) {
      console.log("Error loading tasks from localStorage:", error);
      return [];
    }
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
              priority: newPriority,
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
    <TaskContext.Provider
      value={{
        tasks,
        setTasks,
        addTask,
        handleDelete,
        handleCompleted,
        handleEdit,
        handlePriority,
        handleLabels,
        handleDeadline,
        updateTask,
      }}
    >
      {children}
    </TaskContext.Provider>
  );
}

import React from "react";
import { createContext } from "react";
import { useState, useEffect } from "react";
import {
  getSavedTasks,
  saveTasks,
  createTask,
} from "../services/tasks-service";

export const TaskContext = createContext();

export function TaskProvider({ children }) {
  const [tasks, setTasks] = useState(getSavedTasks);

  useEffect(() => {
    saveTasks(tasks);
  }, [tasks]);

  const addTask = (taskText, deadline) => {
    const newTask = createTask(taskText, deadline);
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

  const handleEdit = (id, newText, newStart, newEnd) => {
    updateTask({ id, text: newText, start: newStart, end: newEnd });
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

  const updateTask = (newFields) => {
    setTasks((prevTasks) => {
      const newTasks = prevTasks.map((task) =>
        task.id === newFields.id ? { ...task, ...newFields } : task
      );
      saveTasks(newTasks);
      return newTasks;
    });
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
        updateTask,
      }}
    >
      {children}
    </TaskContext.Provider>
  );
}

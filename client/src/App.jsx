import React, { useState, useEffect } from "react";
import "./App.css";
import TaskForm from "./components/Form/TaskForm";
import TaskColumn from "./components/TaskColumn/TaskColumn";
import todoIcon from "./assets/todo.jpg";
import inProgressIcon from "./assets/progress.webp";
import doneIcon from "./assets/done.jpg";

// Retrieve tasks from localStorage
const oldTasks = localStorage.getItem("tasks");

export default function App() {
  const [tasks, setTasks] = useState(JSON.parse(oldTasks) || []); // Parse stored tasks or initialize with an empty array
  const [activeCard, setActiveCard] = useState(null); // State to keep track of the currently active task card

  // Effect to save tasks to localStorage whenever tasks change
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  // Event handler to delete a task
  const handleDelete = (taskIndex) => {
    const newTasks = tasks.filter((task, index) => index !== taskIndex);
    setTasks(newTasks);
  };

  // Function to handle dropping a task card into a column
  const onDrop = (status, position) => {
    if (activeCard === null || activeCard === undefined) return;
    const taskToMove = tasks[activeCard];
    const updatedTasks = tasks.filter((task, index) => index !== activeCard);

    updatedTasks.splice(position, 0, {
      ...taskToMove,
      status: status,
      timestamp:
        status === "done" ? new Date().toLocaleString() : taskToMove.timestamp,
    });
    setTasks(updatedTasks);
  };

  // Function to handle changing the status of a task
  const handleStatusChange = (taskIndex, newStatus) => {
    const updatedTasks = tasks.map((task, index) => {
      if (index === taskIndex) {
        return {
          ...task,
          status: newStatus,
          timestamp:
            newStatus === "done" ? new Date().toLocaleString() : task.timestamp,
        };
      }
      return task;
    });
    setTasks(updatedTasks);
  };

  return (
    <div className="app">
      <TaskForm setTasks={setTasks} />
      <main className="app_main">
        <TaskColumn
          title="To Do"
          icon={todoIcon}
          tasks={tasks}
          status="todo"
          handleDelete={handleDelete}
          setActiveCard={setActiveCard}
          onDrop={onDrop}
          handleStatusChange={handleStatusChange}
        />
        <TaskColumn
          title="In Progress"
          icon={inProgressIcon}
          tasks={tasks}
          status="in_progress"
          handleDelete={handleDelete}
          setActiveCard={setActiveCard}
          onDrop={onDrop}
          handleStatusChange={handleStatusChange}
        />
        <TaskColumn
          title="Done"
          icon={doneIcon}
          tasks={tasks}
          status="done"
          handleDelete={handleDelete}
          setActiveCard={setActiveCard}
          onDrop={onDrop}
        />
      </main>
    </div>
  );
}

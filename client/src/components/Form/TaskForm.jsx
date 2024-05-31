import React, { useState } from "react";
import "./TaskForm.css";

export default function TaskForm({ setTasks }) {
  // State for managing form data
  const [taskData, setTaskData] = useState({
    task: "",
    description: "",
    status: "todo", // Default status set to "todo"
  });

  // Function to handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    // Update taskData state with new values
    setTaskData((prev) => {
      return { ...prev, [name]: value };
    });
  };

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Update tasks state with new task data
    setTasks((prev) => {
      return [...prev, taskData];
    });
    // Reset form fields after submission
    setTaskData({
      task: "",
      description: "",
      status: "todo",
    });
  };

  return (
    <header className="app_header">
      {/* Form for adding a new task */}
      <form onSubmit={handleSubmit}>
        {/* Input field for task title */}
        <input
          type="text"
          name="task"
          value={taskData.task}
          className="task_input"
          placeholder="Enter your task"
          onChange={handleChange}
          required // Marked as required field
        />
        {/* Input field for task description */}
        <input
          name="description"
          value={taskData.description}
          className="task_description"
          placeholder="Enter description (optional)"
          onChange={handleChange}
        />
        <div className="task_form_bottom_line">
          <div>
            {/* Dropdown for selecting task status */}
            <select
              name="status"
              value={taskData.status}
              className="task_status"
              onChange={handleChange}
            >
              <option value="todo">To Do</option>
              <option value="in_progress">In Progress</option>
              {/* You can add more options for other statuses if needed */}
            </select>
            {/* Button to submit the form */}
            <button type="submit" className="task_submit">
              + Add Task
            </button>
          </div>
        </div>
      </form>
    </header>
  );
}

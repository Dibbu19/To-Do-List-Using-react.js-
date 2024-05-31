import React from "react";
import "./TaskCard.css";
import deleteIcon from "../../assets/delete.jpg";

export default function TaskCard({
  title,
  description,
  handleDelete,
  index,
  setActiveCard,
  status,
  handleStatusChange,
  timestamp,
}) {
  // Function to get the next status based on the current status
  const getNextStatus = (currentStatus) => {
    switch (currentStatus) {
      case "todo":
        return "in_progress";
      case "in_progress":
        return "done";
      default:
        return currentStatus;
    }
  };

  return (
    <article
      className="task_card"
      draggable // Enable dragging for the task card
      onDragStart={() => setActiveCard(index)} // Set active card when dragging starts
      onDragEnd={() => setActiveCard(null)} // Reset active card when dragging ends
    >
      {/* Title of the task */}
      <p className="task_text">{title}</p>
      {/* Description of the task (if available) */}
      {description && <p className="task_description">{description}</p>}
      {/* Timestamp of the task (if available) */}
      {timestamp && <p className="task_timestamp">{timestamp}</p>}
      <div className="task_card_bottom_line">
        {/* Button to change task status */}
        <button
          className="task_status_button"
          onClick={() => handleStatusChange(index, getNextStatus(status))}
        >
          {/* Display different text based on task status */}
          {status === "todo"
            ? "Start"
            : status === "in_progress"
            ? "Complete"
            : "DONE"}
        </button>
        {/* Button to delete the task */}
        <div className="task_delete" onClick={() => handleDelete(index)}>
          <img src={deleteIcon} className="delete_icon" alt="" />{" "}
        </div>
      </div>
    </article>
  );
}

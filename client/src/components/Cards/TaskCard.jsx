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
      draggable
      onDragStart={() => setActiveCard(index)}
      onDragEnd={() => setActiveCard(null)}
    >
      <p className="task_text">{title}</p>
      {description && <p className="task_description">{description}</p>}
      {timestamp && <p className="task_timestamp">{timestamp}</p>}
      <div className="task_card_bottom_line">
        <button
          className="task_status_button"
          onClick={() => handleStatusChange(index, getNextStatus(status))}
        >
          {status === "todo"
            ? "Start"
            : status === "in_progress"
            ? "Complete"
            : "DONE"}
        </button>
        <div className="task_delete" onClick={() => handleDelete(index)}>
          <img src={deleteIcon} className="delete_icon" alt="" />
        </div>
      </div>
    </article>
  );
}

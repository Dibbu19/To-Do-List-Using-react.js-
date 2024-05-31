import React from "react";
import "./TaskColumn.css";
import TaskCard from "../Cards/TaskCard";
import DropArea from "../DropArea/DropArea";

export default function TaskColumn({
  title,
  icon,
  tasks,
  status,
  handleDelete,
  setActiveCard,
  onDrop,
  handleStatusChange,
}) {
  return (
    <section className="task_column">
      <h2 className="task_column_heading">
        <img className="task_column_icon" src={icon} alt=""></img>
        {title}
      </h2>
      <DropArea onDrop={() => onDrop(status, 0)} />
      {tasks.map(
        (task, index) =>
          task.status === status && (
            <React.Fragment key={index}>
              <TaskCard
                title={task.task}
                description={task.description}
                handleDelete={handleDelete}
                index={index}
                setActiveCard={setActiveCard}
                status={status}
                handleStatusChange={handleStatusChange}
                timestamp={task.timestamp}
              />
              <DropArea onDrop={() => onDrop(status, index + 1)} />
            </React.Fragment>
          )
      )}
    </section>
  );
}

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
      {/* Displaying the title and icon of the column */}
      <h2 className="task_column_heading">
        <img className="task_column_icon" src={icon} alt=""></img>
        {title}
      </h2>

      {/* DropArea component to allow dropping tasks */}
      <DropArea onDrop={() => onDrop(status, 0)} />

      {/* Mapping through tasks to render TaskCard components */}
      {tasks.map(
        (task, index) =>
          task.status === status && ( // Render TaskCard only if its status matches the column status
            <React.Fragment key={index}>
              {/* Rendering TaskCard component */}
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
              {/* DropArea component after each TaskCard */}
              <DropArea onDrop={() => onDrop(status, index + 1)} />
            </React.Fragment>
          )
      )}
    </section>
  );
}

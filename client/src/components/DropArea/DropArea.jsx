import React, { useState } from "react";
import "./DropArea.css";

export default function DropArea({ onDrop }) {
  // State to manage whether the drop area is shown or hidden
  const [showDrop, setShowDrop] = useState(false);

  return (
    <section
      // Event handlers for drag and drop functionality
      onDragEnter={() => setShowDrop(true)} // Show drop area when dragged item enters
      onDragLeave={() => setShowDrop(false)} // Hide drop area when dragged item leaves
      onDrop={() => {
        onDrop(); // Call the onDrop function when item is dropped
        setShowDrop(false); // Hide drop area after dropping
      }}
      onDragOver={(e) => e.preventDefault()} // Prevent default behavior of drag over
      className={showDrop ? "drop_area" : "hide_drop"} // Set class based on whether drop area is shown
    >
      Drop Here {/* Displayed text inside the drop area */}
    </section>
  );
}

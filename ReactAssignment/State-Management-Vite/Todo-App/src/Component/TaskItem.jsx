import React from "react";

function TaskItem({ item, onDelete, onToggle }) {
  const taskStyle = {
    color: item.completed ? "green" : "red",
  };

  return (
    <div style={taskStyle}>
      <p>{item.task}</p>
      <p>Assigned to: {item.taskAssignedTo}</p>
      <button onClick={onDelete}>Delete Task</button>
      <button onClick={onToggle}>Toggle Task</button>
    </div>
  );
}

export default TaskItem;

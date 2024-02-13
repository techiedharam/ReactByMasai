import  { useState } from "react";
import "./App.css";
import TaskItem from "./Component/TaskItem";

function App() {
  const [tasks, setTasks] = useState([]);
  const [formState, setFormState] = useState({
    task: "",
    completed: false,
    taskAssignedTo: "",
  });

  // Part 1: Form State Management
  function handleChange(event) {
    const { name, value, type, checked } = event.target;
    const updatedValue = type === "checkbox" ? checked : value;

    setFormState((prevFormState) => ({
      ...prevFormState,
      [name]: updatedValue,
    }));
  }

  // Part 2: Task Management
  function handleSubmit(event) {
    event.preventDefault();

    if (!formState.task || !formState.taskAssignedTo) {
      alert("Please fill in both task and assignee");
      return;
    }

    const newTask = { ...formState };
    setTasks((prevTasks) => [...prevTasks, newTask]);
    setFormState({
      task: "",
      completed: false,
      taskAssignedTo: "",
    });
  }

  // Part 3: Delete and Toggle Task
  function handleDelete(index) {
    setTasks((prevTasks) => prevTasks.filter((_, i) => i !== index));
  }

  function handleToggle(index) {
    setTasks((prevTasks) =>
      prevTasks.map((task, i) =>
        i === index ? { ...task, completed: !task.completed } : task
      )
    );
  }

  return (
    <>
    <h1>Todo Application </h1>
      <div>
        <form onSubmit={handleSubmit} className="form">
          <input
            name="task"
            type="text"
            placeholder="Add Task"
            value={formState.task}
            onChange={handleChange}
          />
          <label>
            Completed:
            <input
              name="completed"
              type="checkbox"
              checked={formState.completed}
              onChange={handleChange}
            />
          </label>
          <select
            name="taskAssignedTo"
            value={formState.taskAssignedTo}
            onChange={handleChange}
          >
            <option value="">Select Assignee</option>
            <option value="Bruce">Bruce</option>
            <option value="Barry">Barry</option>
            <option value="Clark">Clark</option>
            <option value="Oliver">Oliver</option>
            <option value="Jina">Jina</option>
          </select>
          <button type="submit">Add Task</button>
        </form>
      </div>
      <hr />
      {tasks.map((item, index) => (
        <TaskItem
          key={index}
          item={item}
          onDelete={() => handleDelete(index)}
          onToggle={() => handleToggle(index)}
        />
      ))}
    </>
  );
}

export default App;

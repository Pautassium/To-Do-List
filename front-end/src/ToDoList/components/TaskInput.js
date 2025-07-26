import React from 'react';
import '../styles/TaskInput.css'; // Importing CSS for styling

function TaskInput({ newTask, onChange, onAdd }) {
  return (
    <div className="task-input-container">
      <input
        type="text"
        placeholder="Enter a new task"
        value={newTask}
        onChange={onChange}
        className="todo-input"
      />
      <button onClick={onAdd} className="todo-add-button">➕</button>
    </div>
  );
}

export default TaskInput;

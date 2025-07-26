import React from 'react';
import '../styles/TaskList.css'; // Importing CSS for styling

function TaskList({ tasks, onDelete, onMoveUp, onMoveDown }) {
  return (
    <ol className="task-list">
      {tasks.map((task) => (
        <li key={task.id} className="task-item">
          {task.text}
          <div className="task-buttons">
            <button onClick={() => onDelete(task.id)}>❌</button>
            <button onClick={() => onMoveUp(task.id)}>⬆️</button>
            <button onClick={() => onMoveDown(task.id)}>⬇️</button>
          </div>
        </li>
      ))}
    </ol>
  );
}

export default TaskList;

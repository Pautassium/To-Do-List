import React from 'react';
import '../styles/TaskList.css'; // Ensure your CSS supports the layout

function TaskList({ tasks, onDelete, onMoveUp, onMoveDown }) {
  return (
    <ol className="task-list">
      {tasks.map((task) => (
        <li key={task.id} className="task-item">
          <div className="task-content">
            <h3 className="task-title">{task.text}</h3>
            {task.description && <p className="task-description">{task.description}</p>}
            {task.due && (
              <p className="task-due">
                <strong>Due in:</strong> {task.due} day{task.due === '1' ? '' : 's'}
              </p>
            )}
          </div>

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

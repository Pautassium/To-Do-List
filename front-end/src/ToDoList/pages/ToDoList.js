import React, { useState } from 'react';
import TaskInput from '../components/TaskInput';
import TaskList from '../components/TaskList';

function ToDoList() {
  const [tasks, setTasks] = useState([]);

  const addTask = (taskData) => {
    setTasks(prev => [
      ...prev,
      {
        id: Date.now(), // still works fine
        text: taskData.title,
        description: taskData.description,
        due: taskData.due
      }
    ]);
  };

  const deleteTask = (id) => {
    setTasks(prev => prev.filter(task => task.id !== id));
  };

  const moveTaskUp = (id) => {
    setTasks(prev => {
      const index = prev.findIndex(t => t.id === id);
      if (index <= 0) return prev;
      const newTasks = [...prev];
      [newTasks[index - 1], newTasks[index]] = [newTasks[index], newTasks[index - 1]];
      return newTasks;
    });
  };

  const moveTaskDown = (id) => {
    setTasks(prev => {
      const index = prev.findIndex(t => t.id === id);
      if (index === -1 || index >= prev.length - 1) return prev;
      const newTasks = [...prev];
      [newTasks[index + 1], newTasks[index]] = [newTasks[index], newTasks[index + 1]];
      return newTasks;
    });
  };

  const clearTasks = () => {
    setTasks([]);
  };

  return (
    <div>
      <TaskInput onAddTask={addTask} />
      <TaskList
        tasks={tasks}
        onDelete={deleteTask}
        onMoveUp={moveTaskUp}
        onMoveDown={moveTaskDown}
      />
      <button onClick={clearTasks} className="clear-button">🚮 Clear All Tasks</button>
    </div>
  );
}

export default ToDoList;

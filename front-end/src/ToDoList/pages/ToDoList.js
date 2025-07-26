import React, { useState } from 'react';
import TaskInput from '../components/TaskInput';
import TaskList from '../components/TaskList';



function ToDoList() {
    const [newTask, setNewTask] = useState(''); // use state is a React hook that lets you add state to functional components
    // useState returns an array with two elements: the current state and a function to update it
    // newTask is the current state, setNewTask is the function to update it
    // useState('') initializes newTask with an empty string
    const [tasks, setTasks] = useState([]);
    const handleInputChange = (e) => {  // show text when typing
        setNewTask(e.target.value);
    };
    const addTask = () => {
        // alert(`Task added: ${newTask}`);
        if (!newTask.trim()) return; // Don't add empty tasks
        setTasks([...tasks, { id: Date.now(), text: newTask }]);
        setNewTask(''); // Clear the input field after adding the task
    };
    const deleteTask = (id) => {
      const newTasks = tasks.filter((task) => task.id !== id);
      setTasks(newTasks);
};

    const moveTaskUp = (id) => {
      const index = tasks.findIndex(task => task.id === id);
      if (index <= 0) return;

      const newTasks = [...tasks];
      [newTasks[index - 1], newTasks[index]] = [newTasks[index], newTasks[index - 1]];
      setTasks(newTasks);
    };

    const moveTaskDown = (id) => {
      const index = tasks.findIndex(task => task.id === id);
      if (index === -1 || index === tasks.length - 1) return;

      const newTasks = [...tasks];
      [newTasks[index], newTasks[index + 1]] = [newTasks[index + 1], newTasks[index]];
      setTasks(newTasks);
    };

    const clearTasks = () => {
        setTasks([]);
    };

return (
  <div>
    <TaskInput
      newTask={newTask}
      onChange={handleInputChange}
      onAdd={addTask}
    />
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
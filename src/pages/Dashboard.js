import React, { useState, useEffect } from 'react';
import TaskInput from '../components/TaskInput';
import TaskList from '../components/TaskList';

const sortTasks = (tasks) => {
  const priorityOrder = { High: 3, Medium: 2, Low: 1 };
  return tasks.sort((a, b) => priorityOrder[b.priority] - priorityOrder[a.priority]);
};

const Dashboard = () => {
  const [tasks, setTasks] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
    setTasks(sortTasks(storedTasks));
  }, []);

  const handleAddTask = (text, priority, city) => {
    const newTask = { id: Date.now(), text, priority, city };
    const updatedTasks = sortTasks([...tasks, newTask]);
    setTasks(updatedTasks);
    localStorage.setItem('tasks', JSON.stringify(updatedTasks));
  };

  const handleDeleteTask = (taskId) => {
    const updatedTasks = tasks.filter(task => task.id !== taskId);
    setTasks(updatedTasks);
    localStorage.setItem('tasks', JSON.stringify(updatedTasks));
  };

  return (
    <div>
      <h1>To-Do List</h1>
      <TaskInput onAddTask={handleAddTask} />
      <TaskList tasks={tasks} onDeleteTask={handleDeleteTask} />
      {error && <p>Error: {error.message}</p>}
    </div>
  );
};

export default Dashboard;



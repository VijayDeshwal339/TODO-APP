// // Dashboard.js (Updated)
// import React, { useState, useEffect } from 'react';
// import TaskInput from '../components/TaskInput';
// import TaskList from '../components/TaskList';

// const Dashboard = () => {
//   const [tasks, setTasks] = useState([]);

//   useEffect(() => {
//     const storedTasks = JSON.parse(localStorage.getItem('tasks'));
//     if (storedTasks) {
//       setTasks(storedTasks);
//     }
//   }, []);

//   const handleAddTask = (text, priority) => {
//     const newTask = { id: Date.now(), text, priority };
//     setTasks((prevTasks) => [...prevTasks, newTask]);
//   };

//   const handleDeleteTask = (taskId) => {
//     setTasks((prevTasks) => prevTasks.filter((task) => task.id !== taskId));
//   };

//   useEffect(() => {
//     localStorage.setItem('tasks', JSON.stringify(tasks));
//   }, [tasks]);

//   return (
//     <div>
//       <h1>To-Do List</h1>
//       <TaskInput onAddTask={handleAddTask} />
//       <TaskList tasks={tasks} onDeleteTask={handleDeleteTask} />
//     </div>
//   );
// };

// export default Dashboard;

import React, { useState, useEffect } from 'react';
import TaskInput from '../components/TaskInput';
import TaskList from '../components/TaskList';

const Dashboard = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem('tasks'));
    if (storedTasks) {
      // Sort tasks by priority level before setting them
      const sortedTasks = storedTasks.sort((a, b) => {
        const priorityOrder = { High: 3, Medium: 2, Low: 1 }; // Define priority order
        return priorityOrder[b.priority] - priorityOrder[a.priority];
      });
      setTasks(sortedTasks);
    }
  }, []);

  const handleAddTask = (text, priority) => {
    const newTask = { id: Date.now(), text, priority };
    // Add the new task to tasks array and sort again
    const updatedTasks = [...tasks, newTask].sort((a, b) => {
      const priorityOrder = { High: 3, Medium: 2, Low: 1 }; // Define priority order
      return priorityOrder[b.priority] - priorityOrder[a.priority];
    });
    setTasks(updatedTasks);
    localStorage.setItem('tasks', JSON.stringify(updatedTasks));
  };

  const handleDeleteTask = (taskId) => {
    const updatedTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(updatedTasks);
    localStorage.setItem('tasks', JSON.stringify(updatedTasks));
  };

  return (
    <div>
      <h1>To-Do List</h1>
      <TaskInput onAddTask={handleAddTask} />
      <TaskList tasks={tasks} onDeleteTask={handleDeleteTask} />
    </div>
  );
};

export default Dashboard;


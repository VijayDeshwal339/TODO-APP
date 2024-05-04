// TaskInput.js (Updated)
import React, { useState } from 'react';

const TaskInput = ({ onAddTask }) => {
  const [taskInput, setTaskInput] = useState('');
  const [priority, setPriority] = useState('Low');

  const handleChange = (e) => {
    setTaskInput(e.target.value);
  };

  const handlePriorityChange = (e) => {
    setPriority(e.target.value);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      onAddTask(taskInput, priority);
      setTaskInput('');
      setPriority('Low');
    }
  };

  return (
    <div>
      <input
        type="text"
        value={taskInput}
        onChange={handleChange}
        onKeyPress={handleKeyPress}
        placeholder="Add a task..."
      />
      <select value={priority} onChange={handlePriorityChange}>
        <option value="Low">Low</option>
        <option value="Medium">Medium</option>
        <option value="High">High</option>
      </select>
      <button onClick={() => { onAddTask(taskInput, priority); setTaskInput(''); setPriority('Low'); }}>Add Task</button>
    </div>
  );
};

export default TaskInput;

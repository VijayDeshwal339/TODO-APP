import React, { useState, useEffect } from 'react';
import TaskInput from '../components/TaskInput';
import TaskList from '../components/TaskList';

const API_KEY = '48426bac92534fadab5115831240405';
const API_BASE_URL = 'http://api.weatherapi.com/v1';

const fetchWeatherData = async (location) => {
  try {
    const response = await fetch(`${API_BASE_URL}/current.json?key=${API_KEY}&q=${location}`);
    if (!response.ok) {
      const errorMessage = `${response.status} ${response.statusText}`;
      throw new Error(`Failed to fetch weather data: ${errorMessage}`);
    }
    const data = await response.json();
    console.log('Weather API Data:', data); 
    return data;
  } catch (error) {
    console.error('Error fetching weather data:', error.message);
    throw error;
  }
};

const Dashboard = () => {
  const [tasks, setTasks] = useState([]);
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem('tasks'));
    if (storedTasks) {
      const sortedTasks = storedTasks.sort((a, b) => {
                const priorityOrder = { High: 3, Medium: 2, Low: 1 }; 
                return priorityOrder[b.priority] - priorityOrder[a.priority];
              });
              setTasks(sortedTasks);
    }

    
    fetchWeatherData('Burari')
      .then((data) => {
        console.log('Weather Data:', data); 
        setWeatherData(data);
      })
      .catch((error) => setError(error)); 
  }, []);

  const handleAddTask = (text, priority) => {
    const newTask = { id: Date.now(), text, priority };
    setTasks((prevTasks) => [...prevTasks, newTask]);
    localStorage.setItem('tasks', JSON.stringify([...tasks, newTask]));
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
      {error && <p>Error fetching weather data: {error.message}</p>}
      {weatherData && (
        <div>
          <h2>Weather Information</h2>
          <p>City: {weatherData?.location?.name}</p>
          <p>Temperature: {weatherData?.current?.temp_c} °C</p>
          <p>Weather: {weatherData?.current?.condition?.text}</p>
        </div>
      )}
    </div>
  );
};

export default Dashboard;



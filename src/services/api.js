import axios from 'axios';

const API_KEY = 'YOUR_API_KEY'; // Replace with your actual API key
const API_BASE_URL = 'https://api.example.com'; // Replace with your API base URL

const api = axios.create({
  baseURL: API_BASE_URL,
});

export const fetchWeatherData = async (city) => {
  try {
    const response = await api.get(`/weather?city=${city}&apiKey=${API_KEY}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching weather data:', error);
    throw error;
  }
};

export default api;

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
    return data;
  } catch (error) {
    console.error('Error fetching weather data:', error.message);
    throw error;
  }
};

export default fetchWeatherData;

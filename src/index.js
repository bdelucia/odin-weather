import './style.css';
const API_KEY = '28RELCWXNR4CHUTCUDFR8F9FN';
const baseURL =
  'https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/';
const submitBtn = document.getElementById('submitBtn');

submitBtn.addEventListener('click', async () => {
  const location = document.querySelector('input').value.trim();
  if (location === '') {
    alert('Please enter a location or zipcode');
    return;
  }
  const url = baseURL + location + '?key=' + API_KEY;
  const weatherData = await getWeatherData(url);
  if (weatherData) {
    console.log('Weather Data fetched:', weatherData);
    displayWeatherData(weatherData);
  }
});

async function getWeatherData(url) {
  try {
    const response = await fetch(url, { mode: 'cors' });
    if (!response.ok) {
      throw new Error(`HTTP Error, status ${response.status}`);
    }
    const weatherData = await response.json();
    return weatherData;
  } catch (error) {
    console.log(error);
    alert(
      'Failed to fetch weather data. Please check the location or try again later.',
    );
    return null;
  }
}

function displayWeatherData(weatherData) {
  const temperatureElement = document.getElementById('temp');
  const descriptionElement = document.getElementById('desc');
  if (!weatherData || !weatherData.currentConditions) {
    alert('Error parsing weather data');
    return;
  }
  const { temp } = weatherData.currentConditions;
  const { description } = weatherData;
  temperatureElement.textContent = temp + '°F';
  descriptionElement.textContent = description;
}

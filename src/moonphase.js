import { baseURL, API_KEY, getWeatherData } from '.';

// fetches moon phase based on arbitrary location
async function getMoonPhase() {
  let url = baseURL + '85308' + '?key=' + API_KEY;
  const weatherData = await getWeatherData(url);
  if (weatherData) {
    // console.log('Weather Data fetched:', weatherData);
    const { moonphase } = weatherData.currentConditions;
    return moonphase;
  }
}

// displays the moon phase information on the page
export async function setMoonPhase() {
  const moonphaseElement = document.getElementById('moonphase');
  let moonphase = await getMoonPhase();
  switch (true) {
    case moonphase === 0:
      moonphaseElement.textContent = 'Moon: New Moon';
      break;
    case moonphase > 0 && moonphase < 0.25:
      moonphaseElement.textContent = 'Moon: Waxing Crescent';
      break;
    case moonphase === 0.25:
      moonphaseElement.textContent = 'Moon: First Quarter';
      break;
    case moonphase > 0.25 && moonphase < 0.5:
      moonphaseElement.textContent = 'Moon: Waxing Gibbous';
      break;
    case moonphase === 0.5:
      moonphaseElement.textContent = 'Moon: Full Moon';
      break;
    case moonphase > 0.5 && moonphase < 0.75:
      moonphaseElement.textContent = 'Moon: Waning Gibbous';
      break;
    case moonphase === 0.75:
      moonphaseElement.textContent = 'Moon: Last Quarter';
      break;
    case moonphase > 0.75 && moonphase < 1:
      moonphaseElement.textContent = 'Moon: Waning Crescent';
      break;
  }
}

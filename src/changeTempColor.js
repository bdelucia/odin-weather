// changes the color of the temp readout based on it's value
export function changeTempColor(temperatureElement, temp) {
  switch (true) {
    case temp <= 32:
      temperatureElement.style.color = '#AECBFA';
      break;
    case temp > 32 && temp <= 64:
      temperatureElement.style.color = '#C1E1C1';
      break;
    case temp > 64 && temp < 90:
      temperatureElement.style.color = '#FFD59A';
      break;
    case temp >= 90:
      temperatureElement.style.color = '#FFB3B3';
      break;
  }
}

import './styles/index.css';
import { temperatureData } from './data/temperature-data.js';
import { createRadialChart } from './components/radialChart.js';

document.addEventListener('DOMContentLoaded', () => {
  const appDiv = document.getElementById('app');

  const charrtContainer = document.createElement('div');
  charrtContainer.className = 'chart-container';

  const title = document.createElement('h1');
  title.className = 'chart-title';
  title.textContent = 'Temperature Variation Throughtout the YEar';
  charrtContainer.appendChild(title);

  const chart = createRadialChart(temperatureData);
  charrtContainer.appendChild(chart);

  appDiv.appendChild(charrtContainer);
});

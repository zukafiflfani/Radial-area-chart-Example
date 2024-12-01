import * as d3 from 'd3';
import { createScales } from '../utils/scales.js';
import { createTemperatureAreas } from './chart/areas/temperatureAreas.js';
import { createAverageLine } from './chart/lines/averageLine.js';
import { createRadialGrid } from './chart/grid/radialGrid.js';
import { createCircularGrid } from './chart/grid/circularGrid.js';
import { createMonthLabels } from './chart/labels/monthLabels.js';
import { createTemperatureLabels } from './chart/labels/temperatureLabels.js';
import { CHART_CONFIG } from '../utils/constants.js';

export function createRadialChart(data) {
  const { width, margin } = CHART_CONFIG;
  const height = width;
  const innerRadius = width / CHART_CONFIG.innerRadiusRatio;
  const outerRadius = width / 2 - margin;

  const { x, y } = createScales(data, width, innerRadius, outerRadius);

  const svg = d3
    .create('svg')
    .attr('width', width)
    .attr('height', height)
    .attr('viewBox', [-width / 2, -height / 2, width, height])
    .attr('style', 'width: 100%; height: auto;')
    .attr('stroke-linejoin', 'round')
    .attr('stroke-linecap', 'round');

  // Create chart components
  createTemperatureAreas(svg, data, x, y);
  createAverageLine(svg, data, x, y);
  createRadialGrid(svg, x, innerRadius, outerRadius);
  createCircularGrid(svg, y);
  createMonthLabels(svg, x, outerRadius);
  createTemperatureLabels(svg, y);

  return svg.node();
}

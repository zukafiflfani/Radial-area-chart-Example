import * as d3 from 'd3';
import { CHART_CONFIG } from '../../utils/constants.js';

export function createAreas(svg, data, x, y) {
  const area = d3
    .areaRadial()
    .curve(d3.curveLinearClosed)
    .angle((d) => x(new Date(d.date)));

  // Draw outer area
  svg
    .append('path')
    .attr('fill', CHART_CONFIG.colors.outerArea)
    .attr('fill-opacity', CHART_CONFIG.opacities.areas)
    .attr(
      'd',
      area.innerRadius((d) => y(d.minmin)).outerRadius((d) => y(d.maxmax))(data)
    );

  // Draw inner area
  svg
    .append('path')
    .attr('fill', CHART_CONFIG.colors.innerArea)
    .attr('fill-opacity', CHART_CONFIG.opacities.areas)
    .attr(
      'd',
      area.innerRadius((d) => y(d.min)).outerRadius((d) => y(d.max))(data)
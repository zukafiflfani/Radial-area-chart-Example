import * as d3 from 'd3';
import { CHART_CONFIG } from '../../utils/constants.js';

export function createRadialGrid(svg, x, innerRadius, outerRadius) {
  const months = svg.append('g').selectAll('g').data(x.ticks()).join('g');

  months
    .append('path')
    .attr('stroke', CHART_CONFIG.colors.gridLines)
    .attr('stroke-opacity', CHART_CONFIG.opacities.gridLines)
    .attr(
      'd',
      (d) => `
        M${d3.pointRadial(x(d), innerRadius)}
        L${d3.pointRadial(x(d), outerRadius)}
      `
    );
}

export function createCircularGrid(svg, y) {
  const circles = svg
    .append('g')
    .attr('text-anchor', 'middle')
    .selectAll('g')
    .data(y.ticks().reverse())
    .join('g');

  circles
    .append('circle')
    .attr('fill', 'none')
    .attr('stroke', CHART_CONFIG.colors.gridLines)
    .attr('stroke-opacity', CHART_CONFIG.opacities.gridLines)
    .attr('r', y);

  circles
    .append('text')
    .attr('y', (d) => -y(d))
    .attr('dy', '0.35em')
    .attr('stroke', '#fff')
    .attr('stroke-width', 5)
    .attr('fill', CHART_CONFIG.colors.text)
    .attr('paint-order', 'stroke')
    .text((d, i) => `${d.toFixed(0)}${i ? '' : '°F'}`)
    .clone(true)
    .attr('y', (d) => y(d));
}

import { LABEL_CONFIG } from '../../../utils/constants.js';

export function createTemperatureLabels(svg, y) {
  const circles = svg
    .append('g')
    .attr('text-anchor', 'middle')
    .selectAll('g')
    .data(y.ticks().reverse())
    .join('g');

  // Add temperature label backgrounds
  circles
    .append('rect')
    .attr('class', 'temperature-label-bg')
    .attr('x', -LABEL_CONFIG.tempLabelWidth / 2)
    .attr('width', LABEL_CONFIG.tempLabelWidth)
    .attr('height', LABEL_CONFIG.tempLabelHeight)
    .attr('y', (d) => -y(d) - LABEL_CONFIG.tempLabelHeight / 2)
    .attr('fill', 'var(--color-surface)')
    .attr('rx', 2);

  // Add temperature labels
  const labels = circles
    .append('text')
    .attr('class', 'temperature-label')
    .attr('y', (d) => -y(d))
    .attr('dominant-baseline', 'middle')
    .text((d, i) => `${d.toFixed(0)}${i ? '' : '°F'}`);

  // Clone labels to the bottom
  labels.clone(true).attr('y', (d) => y(d));

  return circles;
}

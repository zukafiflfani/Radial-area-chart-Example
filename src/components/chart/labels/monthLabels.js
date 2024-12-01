import * as d3 from 'd3';
import { LABEL_CONFIG } from '../../../utils/constants.js';

export function createMonthLabels(svg, x, outerRadius) {
  const months = svg.append('g').selectAll('g').data(x.ticks()).join('g');

  // Add background for month labels
  months
    .append('rect')
    .attr('class', 'month-label-bg')
    .attr('x', (d) => {
      const angle = x(d) - Math.PI / 2;
      const position =
        Math.cos(angle) * (outerRadius + LABEL_CONFIG.monthLabelOffset);
      return (
        position -
        (angle < Math.PI / 2 || angle > (3 * Math.PI) / 2
          ? 0
          : LABEL_CONFIG.monthLabelWidth)
      );
    })
    .attr('y', (d) => {
      const angle = x(d) - Math.PI / 2;
      return (
        Math.sin(angle) * (outerRadius + LABEL_CONFIG.monthLabelOffset) -
        LABEL_CONFIG.monthLabelHeight / 2
      );
    })
    .attr('width', LABEL_CONFIG.monthLabelWidth)
    .attr('height', LABEL_CONFIG.monthLabelHeight)
    .attr('fill', 'var(--color-surface)')
    .attr('rx', 4);

  // Add month labels with improved positioning
  months
    .append('text')
    .attr('class', 'month-label')
    .attr('x', (d) => {
      const angle = x(d) - Math.PI / 2;
      const position =
        Math.cos(angle) * (outerRadius + LABEL_CONFIG.monthLabelOffset);
      return (
        position + (angle < Math.PI / 2 || angle > (3 * Math.PI) / 2 ? 5 : -5)
      );
    })
    .attr(
      'y',
      (d) =>
        Math.sin(x(d) - Math.PI / 2) *
        (outerRadius + LABEL_CONFIG.monthLabelOffset)
    )
    .attr('text-anchor', (d) => {
      const angle = x(d) - Math.PI / 2;
      return angle < Math.PI / 2 || angle > (3 * Math.PI) / 2 ? 'start' : 'end';
    })
    .attr('dominant-baseline', 'middle')
    .text((d) => d3.timeFormat('%B')(d));

  return months;
}

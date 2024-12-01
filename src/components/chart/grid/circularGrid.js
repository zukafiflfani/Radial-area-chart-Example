import * as d3 from 'd3';

export function createCircularGrid(svg, y) {
  return svg
    .append('g')
    .selectAll('circle')
    .data(y.ticks().reverse())
    .join('circle')
    .attr('class', 'grid-line')
    .attr('fill', 'none')
    .attr('stroke', 'currentColor')
    .attr('stroke-opacity', 0.2)
    .attr('r', y);
}

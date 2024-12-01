import * as d3 from 'd3';

export function createRadialGrid(svg, x, innerRadius, outerRadius) {
  const months = svg.append('g').selectAll('g').data(x.ticks()).join('g');

  months
    .append('path')
    .attr('class', 'grid-line')
    .attr('stroke', 'currentColor')
    .attr('stroke-opacity', 0.2)
    .attr(
      'd',
      (d) => `
        M${d3.pointRadial(x(d), innerRadius)}
        L${d3.pointRadial(x(d), outerRadius)}
      `
    );

  return months;
}

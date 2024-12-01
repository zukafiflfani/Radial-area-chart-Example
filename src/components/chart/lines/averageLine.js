import * as d3 from 'd3';

export function createAverageLine(svg, data, x, y) {
  const line = d3
    .lineRadial()
    .curve(d3.curveLinearClosed)
    .radius((d) => y(d.avg))
    .angle((d) => x(new Date(d.date)));

  svg
    .append('path')
    .attr('class', 'temperature-line')
    .attr('fill', 'none')
    .attr('stroke', 'var(--color-primary-dark)')
    .attr('stroke-width', 2)
    .attr('d', line(data));
}

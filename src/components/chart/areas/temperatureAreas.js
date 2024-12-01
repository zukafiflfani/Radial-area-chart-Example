import * as d3 from 'd3';

export function createTemperatureAreas(svg, data, x, y) {
  const area = d3
    .areaRadial()
    .curve(d3.curveLinearClosed)
    .angle((d) => x(new Date(d.date)));

  // Draw outer area
  svg
    .append('path')
    .attr('class', 'temperature-area outer')
    .attr('fill', 'var(--color-primary-light)')
    .attr('fill-opacity', 0.2)
    .attr(
      'd',
      area.innerRadius((d) => y(d.minmin)).outerRadius((d) => y(d.maxmax))(data)
    );

  // Draw inner area
  svg
    .append('path')
    .attr('class', 'temperature-area inner')
    .attr('fill', 'var(--color-primary)')
    .attr('fill-opacity', 0.2)
    .attr(
      'd',
      area.innerRadius((d) => y(d.min)).outerRadius((d) => y(d.max))(data)
    );
}

import * as d3 from 'd3';
import { CHART_CONFIG } from '../../utils/constants.js';

export function createAverageLine(svg, data, x, y) {
  const line = d3
    .lineRadial()
    .curve(d3.curveLinearClosed)
    .radius((d) => y(d.avg))
    .angle((d) => x(new Date(d.date)));

  svg
    .append('path')
    .attr('fill', 'none')
    .attr('stroke', CHART_CONFIG.colors.averageLine)
    .attr('stroke-width', 1.5)
    .attr('d', line(data));
}

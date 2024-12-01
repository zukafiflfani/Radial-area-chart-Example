import * as d3 from 'd3';

export function createScales(data, width, innerRadius, outerRadius) {
  const x = d3
    .scaleUtc()
    .domain([new Date('2000-01-01'), new Date('2001-01-01') - 1])
    .range([0, 2 * Math.PI]);

  const y = d3
    .scaleRadial()
    .domain([d3.min(data, (d) => d.minmin), d3.max(data, (d) => d.maxmax)])
    .range([innerRadius, outerRadius]);

  return { x, y };
}

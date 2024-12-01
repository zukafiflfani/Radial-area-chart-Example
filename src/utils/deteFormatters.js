import * as d3 from 'd3';

export const formatMonth = (date) => {
  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];
  return months[date.getMonth()];
};

export const formatTemperature = (value) => `${value.toFixed(0)}°F`;

export function getMonthFromDate(dateStr) {
  return formatMonth(new Date(dateStr));
}

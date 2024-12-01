export const CHART_CONFIG = {
  width: 928,
  margin: 10,
  innerRadiusRatio: 5,
  colors: {
    outerArea: 'lightsteelblue',
    innerArea: 'steelblue',
    averageLine: 'steelblue',
    gridLines: '#000',
    text: 'currentColor',
    tooltip: {
      background: 'rgba(255, 255, 255, 0.9)',
      text: '#333',
    },
  },
  opacities: {
    areas: 0.2,
    gridLines: 0.2,
  },
  fontSize: {
    labels: '12px',
    tooltip: '14px',
  },
  animation: {
    duration: 300,
  },
};

export const LABEL_CONFIG = {
  monthLabelOffset: 35,
  monthLabelWidth: 70,
  monthLabelHeight: 24,
  tempLabelWidth: 40,
  tempLabelHeight: 20,
};

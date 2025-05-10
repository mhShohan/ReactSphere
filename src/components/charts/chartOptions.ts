import { ChartOptions } from 'chart.js';

export const chartOptions: any = {
  responsive: true,
  // maintainAspectRatio: false,
  plugins: {
    legend: {
      position: 'bottom',
    },
    title: {
      display: true,
      text: 'Sales Data Visualization',
    },
  },
};

export const horizontalBarOptions: ChartOptions<'bar'> = {
  responsive: true,
  maintainAspectRatio: false,
  indexAxis: 'y' as const, // This makes the bar chart horizontal
  plugins: {
    legend: {
      position: 'bottom',
    },
    title: {
      display: true,
      text: 'Sales Data Visualization (Horizontal)',
    },
  },
};

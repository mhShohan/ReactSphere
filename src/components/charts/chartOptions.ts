import { ChartOptions } from 'chart.js';

export const chartOptions: any = {
  responsive: true,
  maintainAspectRatio: false,
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

export const verticalChartOptions: ChartOptions<'bar'> = {
  layout: {
    padding: {
      top: 20,
      right: 40,
    },
  },
  indexAxis: 'x',
  scales: {
    x: {
      ticks: {
        font: {
          size: 12,
          family: 'roboto',
          weight: 400,
        },
        padding: 10,
      },
      grid: {
        z: 0,
        drawTicks: false,
        display: true,
        color: 'rgba(112, 112, 112, 0.25)',
      },
      title: {
        display: true,
      },
    },
    y: {
      grid: {
        drawTicks: false,
        display: true,
        drawOnChartArea: true,
        color: 'rgba(112, 112, 112, 0.25)',
      },
      title: {
        display: false,
      },
      ticks: {
        display: true,
        font: {
          size: 12,
          family: 'roboto',
          weight: 400,
        },
        padding: 10,
      },
    },
  },
  elements: {
    line: {
      borderWidth: 3,
      tension: 0.4,
    },
    point: {
      radius: 6,
      hoverRadius: 8,
      borderWidth: 2,
      backgroundColor: '#ffffff',
    },
  },
  interaction: {
    intersect: false,
    mode: 'nearest',
  },
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      display: true,
      position: 'bottom',
      labels: {
        boxWidth: 16,
        boxHeight: 16,
        usePointStyle: true,
        pointStyle: 'rectRounded',
        useBorderRadius: false,
      },
    },
    tooltip: {
      titleColor: '#fff',
      footerColor: '#fff',
      titleAlign: 'center',
      footerAlign: 'center',
      bodyAlign: 'center',
      boxWidth: 0,
      boxHeight: 0,
      displayColors: false,
      callbacks: {
        footer: (data) => {
          const dataArr: number[] = (data[0]?.dataset?.data as number[]) || [];

          const total = dataArr.reduce((acc: number, cur: number) => {
            acc += cur;
            return acc;
          }, 0);

          return `Total Sales: ${total}`;
        },
        label: (context) => {
          const dataArr: number[] = (context?.dataset?.data as number[]) || [];
          const value = dataArr[context.dataIndex];

          const total = dataArr.reduce((acc: number, cur: number) => {
            acc += cur;
            return acc;
          }, 0);

          const percentage = (value / total) * 100;

          return `${context.dataset.label}: ${value} (${percentage.toFixed(1)}%)`;
        },
        labelTextColor: function (context) {
          return '#fff';
        },
      },
      titleFont: {
        family: 'roboto',
      },
      footerFont: {
        family: 'roboto',
      },
      bodyFont: {
        family: 'roboto',
      },
    },
  },
  animation: {
    duration: 300,
  },
};

export const horizontalChartOptions: ChartOptions<'bar'> = {
  layout: {
    padding: {
      top: 20,
      right: 40,
    },
  },
  indexAxis: 'y',
  scales: {
    x: {
      ticks: {
        font: {
          size: 12,
          family: 'roboto',
          weight: 400,
        },
        padding: 10,
      },
      grid: {
        z: 0,
        drawTicks: false,
        display: true,
        color: 'rgba(112, 112, 112, 0.25)',
      },
      title: {
        display: true,
      },
    },
    y: {
      grid: {
        drawTicks: false,
        display: true,
        drawOnChartArea: true,
        color: 'rgba(112, 112, 112, 0.25)',
      },
      title: {
        display: false,
      },
      ticks: {
        display: true,
        font: {
          size: 12,
          family: 'roboto',
          weight: 400,
        },
        padding: 10,
      },
    },
  },
  elements: {
    line: {
      borderWidth: 3,
      tension: 0.4,
    },
    point: {
      radius: 6,
      hoverRadius: 8,
      borderWidth: 2,
      backgroundColor: '#ffffff',
    },
  },
  interaction: {
    intersect: false,
    mode: 'nearest',
  },
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      display: true,
      position: 'bottom',
      labels: {
        boxWidth: 16,
        boxHeight: 16,
        usePointStyle: true,
        pointStyle: 'rectRounded',
        useBorderRadius: false,
      },
    },
    tooltip: {
      titleColor: '#fff',
      footerColor: '#fff',
      titleAlign: 'center',
      footerAlign: 'center',
      bodyAlign: 'center',
      boxWidth: 0,
      boxHeight: 0,
      displayColors: false,
      callbacks: {
        footer: (data) => {
          const dataArr: number[] = (data[0]?.dataset?.data as number[]) || [];

          const total = dataArr.reduce((acc: number, cur: number) => {
            acc += cur;
            return acc;
          }, 0);

          return `Total Sales: ${total}`;
        },
        label: (context) => {
          const dataArr: number[] = (context?.dataset?.data as number[]) || [];
          const value = dataArr[context.dataIndex];

          const total = dataArr.reduce((acc: number, cur: number) => {
            acc += cur;
            return acc;
          }, 0);

          const percentage = (value / total) * 100;

          return `${context.dataset.label}: ${value} (${percentage.toFixed(1)}%)`;
        },
        labelTextColor: function (context) {
          return '#fff';
        },
      },
      titleFont: {
        family: 'roboto',
      },
      footerFont: {
        family: 'roboto',
      },
      bodyFont: {
        family: 'roboto',
      },
    },
  },
  animation: {
    duration: 300,
  },
};

export const lineChartOptions: ChartOptions<'line'> = {
  layout: {
    padding: {
      top: 20,
      right: 20,
    },
  },
  scales: {
    x: {
      ticks: {
        font: {
          size: 12,
          family: 'roboto',
          weight: 400,
        },
        padding: 10,
      },
      grid: {
        z: 0,
        drawTicks: false,
        display: true,
        color: 'rgba(112, 112, 112, 0.25)',
      },
      title: {
        display: true,
      },
    },
    y: {
      grid: {
        drawTicks: false,
        display: true,
        drawOnChartArea: true,
        color: 'rgba(112, 112, 112, 0.25)',
      },
      title: {
        display: false,
      },
      ticks: {
        display: true,
        font: {
          size: 12,
          family: 'roboto',
          weight: 400,
        },
        padding: 10,
      },
    },
  },
  elements: {
    line: {
      borderWidth: 3,
      tension: 0.4,
    },
    point: {
      radius: 6,
      hoverRadius: 8,
      borderWidth: 2,
      backgroundColor: '#ffffff',
    },
  },
  interaction: {
    intersect: false,
    mode: 'nearest',
  },
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      display: true,
      position: 'bottom',
      labels: {
        boxWidth: 16,
        boxHeight: 16,
        usePointStyle: true,
        pointStyle: 'rectRounded',
        useBorderRadius: false,
      },
    },
    tooltip: {
      titleColor: '#fff',
      footerColor: '#fff',
      titleAlign: 'center',
      footerAlign: 'center',
      bodyAlign: 'center',
      boxWidth: 0,
      boxHeight: 0,
      displayColors: false,
      callbacks: {
        footer: (data) => {
          const dataArr: number[] = (data[0]?.dataset?.data as number[]) || [];

          const total = dataArr.reduce((acc: number, cur: number) => {
            acc += cur;
            return acc;
          }, 0);

          return `Total Sales: ${total}`;
        },
        label: (context) => {
          const dataArr: number[] = (context?.dataset?.data as number[]) || [];
          const value = dataArr[context.dataIndex];

          const total = dataArr.reduce((acc: number, cur: number) => {
            acc += cur;
            return acc;
          }, 0);

          const percentage = (value / total) * 100;

          return `${context.dataset.label}: ${value} (${percentage.toFixed(1)}%)`;
        },
        labelTextColor: function (context) {
          return '#fff';
        },
      },
      titleFont: {
        family: 'roboto',
      },
      footerFont: {
        family: 'roboto',
      },
      bodyFont: {
        family: 'roboto',
      },
    },
  },
  animation: {
    duration: 0,
  },
};

export const pieChartOptions: ChartOptions<'pie'> = {
  layout: {
    padding: {
      top: 20,
      right: 20,
    },
  },
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      display: true,
      position: 'bottom',
      labels: {
        boxWidth: 12,
        boxHeight: 12,
        usePointStyle: true,
        pointStyle: 'circle',
        useBorderRadius: false,
      },
    },
    tooltip: {
      titleColor: '#fff',
      footerColor: '#fff',
      titleAlign: 'center',
      footerAlign: 'center',
      bodyAlign: 'center',
      boxWidth: 0,
      boxHeight: 0,
      displayColors: true,
      callbacks: {
        footer: (data) => {
          const dataArr: number[] = (data[0]?.dataset?.data as number[]) || [];

          const total = dataArr.reduce((acc: number, cur: number) => {
            acc += cur;
            return acc;
          }, 0);

          return `Total Sales: ${total}`;
        },
        label: (context) => {
          const dataArr: number[] = (context?.dataset?.data as number[]) || [];
          const value = dataArr[context.dataIndex];

          const total = dataArr.reduce((acc: number, cur: number) => {
            acc += cur;
            return acc;
          }, 0);

          const percentage = (value / total) * 100;

          console.log(context);

          return `${context.label}: ${value} (${percentage.toFixed(1)}%)`;
        },
        labelTextColor: function (context) {
          return '#fff';
        },
      },
      titleFont: {
        family: 'roboto',
      },
      footerFont: {
        family: 'roboto',
      },
      bodyFont: {
        family: 'roboto',
      },
    },
  },
  animation: {
    duration: 300,
  },
};

export const radarChartOptions: ChartOptions<'radar'> = {
  layout: {
    padding: {
      top: 20,
      right: 40,
    },
  },
  responsive: true,
  maintainAspectRatio: false,
  elements: {
    line: {
      borderWidth: 3,
    },
  },
  plugins: {
    legend: {
      display: true,
      position: 'bottom',
      labels: {
        boxWidth: 16,
        boxHeight: 16,
        usePointStyle: true,
        pointStyle: 'rectRounded',
        useBorderRadius: false,
      },
    },
    tooltip: {
      titleColor: '#fff',
      footerColor: '#fff',
      titleAlign: 'center',
      footerAlign: 'center',
      bodyAlign: 'center',
      boxWidth: 0,
      boxHeight: 0,
      displayColors: false,
      callbacks: {
        footer: (data) => {
          const dataArr: number[] = (data[0]?.dataset?.data as number[]) || [];

          const total = dataArr.reduce((acc: number, cur: number) => {
            acc += cur;
            return acc;
          }, 0);

          return `Total Sales: ${total}`;
        },
        label: (context) => {
          const dataArr: number[] = (context?.dataset?.data as number[]) || [];
          const value = dataArr[context.dataIndex];

          const total = dataArr.reduce((acc: number, cur: number) => {
            acc += cur;
            return acc;
          }, 0);

          const percentage = (value / total) * 100;

          return `${context.dataset.label}: ${value} (${percentage.toFixed(1)}%)`;
        },
        labelTextColor: function (context) {
          return '#fff';
        },
      },
      titleFont: {
        family: 'roboto',
      },
      footerFont: {
        family: 'roboto',
      },
      bodyFont: {
        family: 'roboto',
      },
    },
  },
  animation: {
    duration: 300,
  },
};

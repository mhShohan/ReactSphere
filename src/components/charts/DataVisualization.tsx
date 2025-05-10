'use client';

import { useState } from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  ArcElement,
  RadialLinearScale,
  Title,
  Tooltip,
  Legend,
  type ChartData,
} from 'chart.js';
import { Line, Bar, Pie, Doughnut, PolarArea, Radar } from 'react-chartjs-2';
import { borderColors, colors, SalesDataItem, sampleDatasets } from '@/utils/data';
import { chartOptions } from './chartOptions';

// Register ChartJS components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  ArcElement,
  RadialLinearScale,
  Title,
  Tooltip,
  Legend
);

type ChartTypeOption = 'bar' | 'line' | 'pie' | 'doughnut' | 'polar' | 'radar';

const DataVisualization = ({ chartType }: { chartType: ChartTypeOption }) => {
  const [selectedCategories, setSelectedCategories] = useState<string[]>([
    ...new Set(sampleDatasets.sales.map((item) => item.category)),
  ]);

  // Get unique categories
  const categories: string[] = [...new Set(sampleDatasets.sales.map((item) => item.category))];

  // Get unique months
  const months: string[] = [...new Set(sampleDatasets.sales.map((item) => item.month))];

  // Filter data based on selected categories
  const filteredData: SalesDataItem[] = sampleDatasets.sales.filter((item) =>
    selectedCategories.includes(item.category)
  );

  // Prepare data for Chart.js (Bar, Line, Radar charts)
  const chartData: ChartData<'bar' | 'line' | 'radar'> = {
    labels: months,
    datasets: categories
      .filter((category) => selectedCategories.includes(category))
      .map((category, index) => {
        return {
          label: category,
          data: months.map((month) => {
            const item = filteredData.find((d) => d.month === month && d.category === category);
            return item ? item.amount : 0;
          }),
          backgroundColor: colors[index % colors.length],
          borderColor: borderColors[index % borderColors.length],
          borderWidth: 1,
          borderRadius: 4,
          lineTension: 0.25,
        };
      }),
  };

  // Prepare data for pie/doughnut/polar charts
  const pieChartData: ChartData<'pie' | 'doughnut' | 'polarArea'> = {
    labels: selectedCategories,
    datasets: [
      {
        data: selectedCategories.map((category) =>
          filteredData
            .filter((item) => item.category === category)
            .reduce((sum, item) => sum + item.amount, 0)
        ),
        backgroundColor: selectedCategories.map((_, index) => colors[index % colors.length]),
        borderColor: selectedCategories.map(
          (_, index) => borderColors[index % borderColors.length]
        ),
        borderWidth: 1,
      },
    ],
  };

  // Render appropriate chart based on selected type
  const renderChart = () => {
    switch (chartType) {
      case 'line':
        return <Line data={chartData as any} options={chartOptions} />;
      case 'bar':
        return <Bar data={chartData as any} options={chartOptions} />;
      case 'pie':
        return <Pie data={pieChartData as any} options={chartOptions} />;
      case 'doughnut':
        return <Doughnut data={pieChartData as any} options={chartOptions} />;
      case 'polar':
        return <PolarArea data={pieChartData as any} options={chartOptions} />;
      case 'radar':
        return <Radar data={chartData as any} options={chartOptions} />;
      default:
        return <Bar data={chartData as any} options={chartOptions} />;
    }
  };

  return <div className='p-4 border border-gray-200 rounded-lg shadow'>{renderChart()}</div>;
};

export default DataVisualization;

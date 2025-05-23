'use client';

import { lineChartOptions } from './chartOptions';
import { borderColors, colors, IChartDataset } from '@/utils/data';
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

interface LineChartProps {
  data: IChartDataset[];
}

const LineChart = ({ data }: LineChartProps) => {
  const [selectedCategories, setSelectedCategories] = useState<string[]>([
    ...new Set(data.map((item) => item.category)),
  ]);

  // Get unique categories
  const categories: string[] = [...new Set(data.map((item) => item.category))];

  // Get unique months
  const months: string[] = [...new Set(data.map((item) => item.month))];

  // Filter data based on selected categories
  const filteredData = data.filter((item) => selectedCategories.includes(item.category));

  const chartData: ChartData<'line'> = {
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
          // lineTension: 0.25,
        };
      }),
  };

  return (
    <div className='h-[500px] w-full border border-gray-200 rounded-xl py-5 bg-white'>
      <Line data={chartData} options={lineChartOptions} />;
    </div>
  );
};

export default LineChart;

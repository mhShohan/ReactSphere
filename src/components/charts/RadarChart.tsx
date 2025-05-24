'use client';

import ChartDataGenerator from '@/lib/ChartDataGenerator';
import { IChartDataset } from '@/types';
import {
  ArcElement,
  BarElement,
  CategoryScale,
  Chart as ChartJS,
  Legend,
  LinearScale,
  LineElement,
  PointElement,
  RadialLinearScale,
  Title,
  Tooltip,
  type ChartData,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import { verticalChartOptions } from './chartOptions';

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

interface RadarChartProps {
  data: IChartDataset[];
}

const RadarChart = ({ data }: RadarChartProps) => {
  const chartData: ChartData<'bar'> = ChartDataGenerator.bar(data);

  return (
    <div className='h-[500px] w-full border border-gray-200 rounded-xl py-5 bg-white'>
      <Bar data={chartData} options={verticalChartOptions} />;
    </div>
  );
};

export default RadarChart;

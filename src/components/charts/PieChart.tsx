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
import { Pie } from 'react-chartjs-2';
import { pieChartOptions } from './chartOptions';

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

interface PieChartProps {
  data: IChartDataset[];
}

const PieChart = ({ data }: PieChartProps) => {
  const chartData: ChartData<'pie'> = ChartDataGenerator.pie(data);

  return (
    <div className='h-[500px] w-full border border-gray-200 rounded-xl py-5 bg-white'>
      <Pie data={chartData} options={pieChartOptions} />;
    </div>
  );
};

export default PieChart;

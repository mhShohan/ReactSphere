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
import { Bar, Radar } from 'react-chartjs-2';
import { radarChartOptions, verticalChartOptions } from './chartOptions';

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
  const chartData: ChartData<'radar'> = ChartDataGenerator.radar(data);

  return (
    <div className='h-[500px] w-full border border-gray-200 rounded-xl py-5 bg-white'>
      <Radar data={chartData} options={radarChartOptions} />;
    </div>
  );
};

export default RadarChart;

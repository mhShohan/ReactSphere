'use client';

import { lineChartOptions } from './chartOptions';
import { borderColors, colors } from '@/utils/data';
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
import { Line } from 'react-chartjs-2';
import ChartDataGenerator from '@/lib/ChartDataGenerator';
import { IChartDataset } from '@/types';

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
  const chartData: ChartData<'line'> = ChartDataGenerator.line(data);

  return (
    <div className='h-[500px] w-full border border-gray-200 rounded-xl py-5 bg-white'>
      <Line data={chartData} options={lineChartOptions} />;
    </div>
  );
};

export default LineChart;

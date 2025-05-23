'use client';

import { horizontalChartOptions } from './chartOptions';
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
import { Bar } from 'react-chartjs-2';
import { IChartDataset } from '@/types';
import ChartDataGenerator from '@/lib/ChartDataGenerator';

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

const HorizontalChart = ({ data }: LineChartProps) => {
  const chartData: ChartData<'bar'> = ChartDataGenerator.bar(data);

  return (
    <>
      <div className='h-[500px] w-full border border-gray-200 rounded-xl bg-white'>
        <Bar data={chartData} options={horizontalChartOptions} />;
      </div>
    </>
  );
};

export default HorizontalChart;

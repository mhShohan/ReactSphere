'use client';

import DataVisualization from '@/components/charts/DataVisualization';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { SalesDataItem, sampleDatasets } from '@/utils/data';
import { useState } from 'react';

type ChartTypeOption = 'bar' | 'line' | 'pie' | 'doughnut' | 'polar' | 'radar';

const AllChartsPage = () => {
  const [chartType, setChartType] = useState<ChartTypeOption>('bar');
  const [selectedCategories, setSelectedCategories] = useState<string[]>([
    ...new Set(sampleDatasets.sales.map((item) => item.category)),
  ]);

  // Filter data based on selected categories
  const filteredData: SalesDataItem[] = sampleDatasets.sales.filter((item) =>
    selectedCategories.includes(item.category)
  );

  // Calculate summary data
  const calculateSummaryData = (category: string): number => {
    return filteredData
      .filter((item) => item.category === category)
      .reduce((sum, item) => sum + item.amount, 0);
  };

  return (
    <div className='flex flex-col p-4 w-full max-w-6xl mx-auto'>
      <div className='flex justify-between items-center'>
        <h1 className='text-2xl font-bold mb-4 text-center'>Data Visualization</h1>

        {/* Controls */}
        <div className='flex flex-col md:flex-row justify-between mb-6 gap-4'>
          <div className='flex items-center gap-2'>
            <label className='text-sm font-medium mb-1'>Chart Type:</label>
            <Select
              defaultValue={chartType}
              onValueChange={(value: ChartTypeOption) => setChartType(value)}
            >
              <SelectTrigger className='w-[160px]'>
                <SelectValue placeholder='Bar Chart' />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectItem value='bar'>Vertical Chart</SelectItem>
                  {/* <SelectItem value='horizontal-bar'>Horizontal Chart</SelectItem> */}
                  <SelectItem value='line'>Line Chart</SelectItem>
                  <SelectItem value='pie'>Pie Chart</SelectItem>
                  <SelectItem value='doughnut'>Doughnut Chart</SelectItem>
                  <SelectItem value='polar'>Polar Area Chart</SelectItem>
                  <SelectItem value='radar'>Radar Chart</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
        </div>
      </div>

      {/* Data Visualization Charts */}
      <DataVisualization chartType={chartType} />

      {/* Summary */}
      <div className='mt-6 p-4 bg-foreground/20 rounded-lg'>
        <h2 className='text-lg font-semibold mb-2'>Data Summary</h2>
        <div className='grid grid-cols-1 md:grid-cols-6 gap-4'>
          {selectedCategories.map((category) => {
            const totalSales = calculateSummaryData(category);

            return (
              <div
                key={category}
                className='p-3 bg-background rounded shadow flex flex-col justify-center items-center'
              >
                <h3 className='font-medium'>{category}</h3>
                <p className='text-2xl font-bold'>{totalSales}</p>
                <p className='text-sm text-foreground'>Total Sales</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default AllChartsPage;

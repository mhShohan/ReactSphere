import { IChartDataset, TChartType } from '@/types';
import { borderColors, colors } from '@/utils/data';
// import { ChartData } from 'chart.js';

class ChartDataGeneratorClass {
  private generate(data: IChartDataset[], chartType: TChartType) {
    const selectedCategories = [...new Set(data.map((item) => item.category))];

    // Get unique categories
    const categories: string[] = [...new Set(data.map((item) => item.category))];

    // Get unique months
    const months: string[] = [...new Set(data.map((item) => item.month))];

    // Filter data based on selected categories
    const filteredData = data.filter((item) => selectedCategories.includes(item.category));

    switch (chartType) {
      case 'bar':
        return {
          labels: months,
          datasets: categories
            .filter((category) => selectedCategories.includes(category))
            .map((category, index) => {
              return {
                label: category,
                data: months.map((month) => {
                  const item = filteredData.find(
                    (d) => d.month === month && d.category === category
                  );
                  return item ? item.amount : 0;
                }),
                backgroundColor: colors[index % colors.length],
                borderColor: borderColors[index % borderColors.length],
                borderWidth: 1,
                borderRadius: 4,
              };
            }),
        };
      case 'line':
        return {
          labels: months,
          datasets: categories
            .filter((category) => selectedCategories.includes(category))
            .map((category, index) => {
              return {
                label: category,
                data: months.map((month) => {
                  const item = filteredData.find(
                    (d) => d.month === month && d.category === category
                  );
                  return item ? item.amount : 0;
                }),
                backgroundColor: colors[index % colors.length],
                borderColor: borderColors[index % borderColors.length],
                borderWidth: 1,
                borderRadius: 4,
              };
            }),
        };
      case 'radar':
        return {
          labels: months,
          datasets: categories
            .filter((category) => selectedCategories.includes(category))
            .map((category, index) => {
              return {
                label: category,
                data: months.map((month) => {
                  const item = filteredData.find(
                    (d) => d.month === month && d.category === category
                  );
                  return item ? item.amount : 0;
                }),
                backgroundColor: colors[index % colors.length],
                borderColor: borderColors[index % borderColors.length],
                borderWidth: 1,
                borderRadius: 4,
              };
            }),
        };
      case 'pie':
        return {
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
      case 'doughnut':
        return {
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
      case 'polarArea':
        return {
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
      default:
        return {
          labels: months,
          datasets: categories
            .filter((category) => selectedCategories.includes(category))
            .map((category, index) => {
              return {
                label: category,
                data: months.map((month) => {
                  const item = filteredData.find(
                    (d) => d.month === month && d.category === category
                  );
                  return item ? item.amount : 0;
                }),
                backgroundColor: colors[index % colors.length],
                borderColor: borderColors[index % borderColors.length],
                borderWidth: 1,
                borderRadius: 4,
              };
            }),
        };
    }
  }

  line(data: IChartDataset[]) {
    return this.generate(data, 'line');
  }

  bar(data: IChartDataset[]) {
    return this.generate(data, 'bar');
  }

  radar(data: IChartDataset[]) {
    return this.generate(data, 'radar');
  }

  pie(data: IChartDataset[]) {
    return this.generate(data, 'pie');
  }

  doughnut(data: IChartDataset[]) {
    return this.generate(data, 'doughnut');
  }

  polarArea(data: IChartDataset[]) {
    return this.generate(data, 'polarArea');
  }
}

const ChartDataGenerator = new ChartDataGeneratorClass();
export default ChartDataGenerator;

import LineChart from '@/components/charts/LineChart';
import { sampleDatasets } from '@/utils/data';

const LineChartPage = () => {
  return <LineChart data={sampleDatasets.sales} />;
};

export default LineChartPage;

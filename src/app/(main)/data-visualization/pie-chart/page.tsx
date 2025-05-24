import PieChart from '@/components/charts/PieChart';
import { sampleDatasets } from '@/utils/data';

const PieChartPage = () => {
  return <PieChart data={sampleDatasets.sales} />;
};

export default PieChartPage;

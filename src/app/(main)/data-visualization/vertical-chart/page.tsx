import VerticalChart from '@/components/charts/VerticalChart';
import { sampleDatasets } from '@/utils/data';

const VerticalChartPage = () => {
  return <VerticalChart data={sampleDatasets.sales} />;
};

export default VerticalChartPage;

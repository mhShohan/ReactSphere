import HorizontalChart from '@/components/charts/HorizontalChart';
import { sampleDatasets } from '@/utils/data';

const HorizontalChartPage = () => {
  return <HorizontalChart data={sampleDatasets.sales} />;
};

export default HorizontalChartPage;

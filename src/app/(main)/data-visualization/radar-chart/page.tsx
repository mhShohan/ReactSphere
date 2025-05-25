import RadarChart from '@/components/charts/RadarChart';
import { sampleDatasets } from '@/utils/data';

const RadarChartPage = () => {
  return <RadarChart data={sampleDatasets.sales} />;
};

export default RadarChartPage;

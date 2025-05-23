export interface IChartDataset {
  month: string;
  amount: number;
  category: string;
}

export type TChartType = 'line' | 'bar' | 'radar' | 'pie' | 'doughnut' | 'polarArea';
export type TChartTypeOption =
  | 'vertical-bar'
  | 'horizontal-bar'
  | 'line'
  | 'pie'
  | 'doughnut'
  | 'heatmap'
  | 'stacked-list'
  | 'polar'
  | 'radar';

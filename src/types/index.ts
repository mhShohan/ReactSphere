export interface IChartDataset {
  month: string;
  amount: number;
  category: string;
}

export type TChartType = 'line' | 'bar' | 'radar' | 'pie' | 'doughnut' | 'polarArea';

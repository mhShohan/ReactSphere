export const colors = [
  'rgba(0, 63, 92, .75)',
  'rgba(42, 133, 161, .75)',
  'rgba(102, 81, 145, .75)',
  'rgba(160, 81, 149, .75)',
  'rgba(194, 101, 53, .75)',
  'rgba(249, 93, 106, .75)',
  'rgba(212, 80, 135, .75)',
  'rgba(47, 75, 124, .75)',
  'rgba(255, 124, 67, .75)',
  'rgba(255, 166, 0, .75)',
  'rgba(79, 90, 199, .75)',
];

export const borderColors = [
  'rgba(0, 63, 92, 1)',
  'rgba(42, 133, 161, 1)',
  'rgba(102, 81, 145, 1)',
  'rgba(160, 81, 149, 1)',
  'rgba(194, 101, 53, 1)',
  'rgba(249, 93, 106, 1)',
  'rgba(212, 80, 135, 1)',
  'rgba(47, 75, 124, 1)',
  'rgba(255, 124, 67, 1)',
  'rgba(255, 166, 0, 1)',
  'rgba(79, 90, 199, 1)',
];

export interface SalesDataItem {
  month: string;
  amount: number;
  category: string;
}

interface SampleData {
  sales: SalesDataItem[];
}

export const sampleDatasets: SampleData = {
  sales: [
    { month: 'January', amount: 65, category: 'Electronics' },
    { month: 'February', amount: 59, category: 'Electronics' },
    { month: 'March', amount: 80, category: 'Electronics' },
    { month: 'April', amount: 72, category: 'Electronics' },
    { month: 'May', amount: 68, category: 'Electronics' },
    { month: 'June', amount: 85, category: 'Electronics' },

    // Groceries
    { month: 'January', amount: 120, category: 'Groceries' },
    { month: 'February', amount: 110, category: 'Groceries' },
    { month: 'March', amount: 130, category: 'Groceries' },
    { month: 'April', amount: 125, category: 'Groceries' },
    { month: 'May', amount: 140, category: 'Groceries' },
    { month: 'June', amount: 135, category: 'Groceries' },

    // Clothing
    { month: 'January', amount: 40, category: 'Clothing' },
    { month: 'February', amount: 55, category: 'Clothing' },
    { month: 'March', amount: 45, category: 'Clothing' },
    { month: 'April', amount: 60, category: 'Clothing' },
    { month: 'May', amount: 50, category: 'Clothing' },
    { month: 'June', amount: 65, category: 'Clothing' },

    // Entertainment
    { month: 'January', amount: 75, category: 'Entertainment' },
    { month: 'February', amount: 65, category: 'Entertainment' },
    { month: 'March', amount: 70, category: 'Entertainment' },
    { month: 'April', amount: 80, category: 'Entertainment' },
    { month: 'May', amount: 90, category: 'Entertainment' },
    { month: 'June', amount: 85, category: 'Entertainment' },

    // Health
    { month: 'January', amount: 50, category: 'Health' },
    { month: 'February', amount: 60, category: 'Health' },
    { month: 'March', amount: 55, category: 'Health' },
    { month: 'April', amount: 70, category: 'Health' },
    { month: 'May', amount: 65, category: 'Health' },
    { month: 'June', amount: 75, category: 'Health' },

    // Transportation
    { month: 'January', amount: 90, category: 'Transportation' },
    { month: 'February', amount: 95, category: 'Transportation' },
    { month: 'March', amount: 85, category: 'Transportation' },
    { month: 'April', amount: 88, category: 'Transportation' },
    { month: 'May', amount: 92, category: 'Transportation' },
    { month: 'June', amount: 100, category: 'Transportation' },
  ],
};

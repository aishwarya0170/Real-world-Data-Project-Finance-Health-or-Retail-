/**
 * Mock data representing the results of the Python Analysis
 */

export const STOCK_HISTORY = [
  { date: '2023-01-01', open: 150, close: 153.2, volume: 1000, actual: 153.2, pred: 152.1 },
  { date: '2023-01-02', open: 153.2, close: 157.4, volume: 1200, actual: 157.4, pred: 155.5 },
  { date: '2023-01-03', open: 157.4, close: 154.1, volume: 1100, actual: 154.1, pred: 156.8 },
  { date: '2023-01-04', open: 154.1, close: 151.2, volume: 950, actual: 151.2, pred: 152.4 },
  { date: '2023-01-05', open: 151.2, close: 149.8, volume: 1050, actual: 149.8, pred: 150.2 },
  { date: '2023-01-06', open: 149.8, close: 152.1, volume: 980, actual: 152.1, pred: 151.8 },
  { date: '2023-01-07', open: 152.1, close: 153.5, volume: 1150, actual: 153.5, pred: 152.9 },
  { date: '2023-01-08', open: 153.5, close: 155.8, volume: 1300, actual: 155.8, pred: 154.2 },
  { date: '2023-01-09', open: 155.8, close: 156.4, volume: 1020, actual: 156.4, pred: 156.1 },
  { date: '2023-01-10', open: 156.4, close: 157.9, volume: 1080, actual: 157.9, pred: 157.3 },
  { date: '2023-01-11', open: 157.9, close: 159.2, volume: 1250, actual: 159.2, pred: 158.8 },
  { date: '2023-01-12', open: 159.2, close: 161.4, volume: 1400, actual: 161.4, pred: 160.9 },
  { date: '2023-01-13', open: 161.4, close: 162.8, volume: 1180, actual: 162.8, pred: 162.2 },
  { date: '2023-01-14', open: 162.8, close: 164.2, volume: 1350, actual: 164.2, pred: 163.7 },
  { date: '2023-01-15', open: 164.2, close: 165.9, volume: 1500, actual: 165.9, pred: 165.1 },
];

export const CORRELATION_DATA = [
  { x: 'Open', y: 'Close', v: 0.98 },
  { x: 'High', y: 'Close', v: 0.99 },
  { x: 'Low', y: 'Close', v: 0.99 },
  { x: 'Volume', y: 'Close', v: -0.15 },
];

export const PROJECT_INSIGHTS = [
  {
    title: "Strong Correlation Found",
    description: "Stock price is highly correlated (0.99) with Intraday Low/High values, suggesting a stable trend during the study period.",
    impact: "High"
  },
  {
    title: "Volume Anomaly",
    description: "Volume shows a weak negative correlation, indicating that price surges aren't always accompanied by high relative volume.",
    impact: "Medium"
  },
  {
    title: "Model Accuracy",
    description: "The Random Forest model achieved an R² score of 0.94, making it reliable for short-term trend prediction.",
    impact: "High"
  }
];

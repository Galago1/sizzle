import { render, screen } from '@testing-library/react-native';
import { BarChart } from './BarChart';

describe('BarChart', () => {
  const mockData = [
    { value: 10, label: 'A' },
    { value: 20, label: 'B' },
  ];

  it('renders correctly', () => {
    render(<BarChart data={mockData} />);

    expect(screen.getByTestId('bar-chart')).toBeTruthy();
    expect(screen.getAllByTestId('bar-item')).toHaveLength(2);
  });
});

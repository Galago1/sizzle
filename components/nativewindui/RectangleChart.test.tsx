import { render, screen } from '@testing-library/react-native';
import RectangleChart from './RectangleChart';

// Mock react-native-svg
jest.mock('react-native-svg', () => ({
  Svg: () => 'Svg',
  Rect: () => 'Rect',
}));

describe('RectangleChart', () => {
  const mockData = Array(35).fill(0.5); // Create mock data array with 35 items

  it('renders correctly', () => {
    render(<RectangleChart data={mockData} />);

    // Check if main component renders
    expect(screen.getByTestId('rectangle-chart')).toBeTruthy();

    // Check if all weeks are rendered
    [0, 7, 14, 21, 28].forEach((weekIndex) => {
      expect(screen.getByTestId(`week-${weekIndex}`)).toBeTruthy();
    });

    // Check if all days are rendered (35 days total)
    for (let i = 0; i < 35; i++) {
      expect(screen.getByTestId(`day-${i}`)).toBeTruthy();
    }
  });
});

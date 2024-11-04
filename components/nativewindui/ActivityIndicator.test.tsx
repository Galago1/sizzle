import { render, screen } from '@testing-library/react-native';
import { ActivityIndicator } from './ActivityIndicator';

// Mock the useColorScheme hook
jest.mock('~/lib/useColorScheme', () => ({
  useColorScheme: () => ({
    colors: {
      primary: '#000000',
    },
  }),
}));

describe('ActivityIndicator', () => {
  it('renders correctly', () => {
    render(<ActivityIndicator />);

    expect(screen.getByTestId('activity-indicator')).toBeTruthy();
  });
});

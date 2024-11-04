import { render, screen } from '@testing-library/react-native';
import { Toggle } from './Toggle';

// Mock the useColorScheme hook
jest.mock('~/lib/useColorScheme', () => ({
  useColorScheme: () => ({
    colors: {
      primary: '#000000',
      grey: '#CCCCCC',
    },
  }),
}));

describe('Toggle', () => {
  it('renders correctly', () => {
    render(<Toggle />);

    expect(screen.getByTestId('toggle-switch')).toBeTruthy();
  });
});

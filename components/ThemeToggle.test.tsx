import { render, screen } from '@testing-library/react-native';
import { ThemeToggle } from './ThemeToggle';

// Add mock for @roninoss/icons
jest.mock('@roninoss/icons', () => ({
  Icon: () => 'Icon',
}));

// Mock the useColorScheme hook
jest.mock('~/lib/useColorScheme', () => ({
  useColorScheme: () => ({
    colorScheme: 'light',
    toggleColorScheme: jest.fn(),
  }),
}));

describe('ThemeToggle', () => {
  it('renders correctly', () => {
    render(<ThemeToggle />);

    expect(screen.getByTestId('theme-toggle')).toBeTruthy();
    expect(screen.getByTestId('toggle-button')).toBeTruthy();
  });
});

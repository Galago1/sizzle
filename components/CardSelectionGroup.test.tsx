import { render, fireEvent } from '@testing-library/react-native';
import { ThemeToggle } from './ThemeToggle';
import { useColorScheme } from '~/lib/useColorScheme';

// Add mock for @roninoss/icons
jest.mock('@roninoss/icons', () => ({
  Icon: () => 'Icon',
}));

// Mock the useColorScheme hook
jest.mock('~/lib/useColorScheme', () => ({
  useColorScheme: jest.fn(),
}));

describe('ThemeToggle', () => {
  const mockToggleColorScheme = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('renders correctly in light mode', () => {
    (useColorScheme as jest.Mock).mockReturnValue({
      colorScheme: 'light',
      toggleColorScheme: mockToggleColorScheme,
    });

    const { getByTestId } = render(<ThemeToggle />);
    expect(getByTestId('theme-toggle')).toBeTruthy();
  });

  it('renders correctly in dark mode', () => {
    (useColorScheme as jest.Mock).mockReturnValue({
      colorScheme: 'dark',
      toggleColorScheme: mockToggleColorScheme,
    });

    const { getByTestId } = render(<ThemeToggle />);
    expect(getByTestId('theme-toggle')).toBeTruthy();
  });

  it('calls toggleColorScheme when pressed', () => {
    (useColorScheme as jest.Mock).mockReturnValue({
      colorScheme: 'light',
      toggleColorScheme: mockToggleColorScheme,
    });

    const { getByTestId } = render(<ThemeToggle />);
    const toggleButton = getByTestId('toggle-button');

    fireEvent.press(toggleButton);
    expect(mockToggleColorScheme).toHaveBeenCalledTimes(1);
  });
});

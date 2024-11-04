import { render, screen } from '@testing-library/react-native';
import { HeaderButton } from './HeaderButton';

// Add mock for @expo/vector-icons/FontAwesome
jest.mock('@expo/vector-icons/FontAwesome', () => 'FontAwesome');

describe('HeaderButton', () => {
  it('renders correctly', () => {
    render(<HeaderButton />);

    expect(screen.getByTestId('header-button')).toBeTruthy();
    expect(screen.getByTestId('info-icon')).toBeTruthy();
  });
});

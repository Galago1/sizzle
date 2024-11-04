import { render, screen } from '@testing-library/react-native';
import { BackButton } from './BackButton';

// Add mock for @expo/vector-icons
jest.mock('@expo/vector-icons', () => ({
  Feather: () => 'Feather',
}));

describe('BackButton', () => {
  it('renders correctly', () => {
    const mockOnPress = jest.fn();
    render(<BackButton onPress={mockOnPress} />);

    expect(screen.getByTestId('back-button')).toBeTruthy();
    expect(screen.getByTestId('back-button-text')).toBeTruthy();
    expect(screen.getByText('Back')).toBeTruthy();
  });
});

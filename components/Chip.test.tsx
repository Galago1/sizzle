import { render, screen, fireEvent } from '@testing-library/react-native';
import Chip from './Chip';

describe('Chip', () => {
  it('renders correctly', () => {
    render(<Chip label="Test Chip" />);

    expect(screen.getByTestId('chip')).toBeTruthy();
    expect(screen.getByTestId('chip-label')).toBeTruthy();
    expect(screen.getByText('Test Chip')).toBeTruthy();
  });

  it('handles press events', () => {
    const onPressMock = jest.fn();
    render(<Chip label="Test Chip" onPress={onPressMock} />);

    const chip = screen.getByTestId('chip');
    fireEvent.press(chip);

    expect(onPressMock).toHaveBeenCalledWith(true);
  });

  it('respects disabled state', () => {
    const onPressMock = jest.fn();
    render(<Chip label="Test Chip" disabled onPress={onPressMock} />);

    const chip = screen.getByTestId('chip');
    fireEvent.press(chip);

    expect(onPressMock).not.toHaveBeenCalled();
  });

  it('renders with different variants', () => {
    const { rerender } = render(<Chip label="Test Chip" variant="filled" />);
    expect(screen.getByTestId('chip')).toBeTruthy();

    rerender(<Chip label="Test Chip" variant="outlined" />);
    expect(screen.getByTestId('chip')).toBeTruthy();
  });
});

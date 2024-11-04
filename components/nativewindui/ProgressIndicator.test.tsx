import { render, screen } from '@testing-library/react-native';
import { ProgressIndicator } from './ProgressIndicator';

describe('ProgressIndicator', () => {
  it('renders correctly with default props', () => {
    render(<ProgressIndicator />);

    expect(screen.getByTestId('progress-indicator')).toBeTruthy();
    expect(screen.getByTestId('progress-background')).toBeTruthy();
    expect(screen.getByTestId('progress-bar')).toBeTruthy();
  });

  it('renders correctly with custom value and max', () => {
    render(<ProgressIndicator value={50} max={100} />);

    const progressIndicator = screen.getByTestId('progress-indicator');
    expect(progressIndicator).toBeTruthy();
    expect(progressIndicator.props.accessibilityValue).toEqual({
      min: 0,
      max: 100,
      now: 50,
      text: '50%',
    });
  });

  it('handles invalid value gracefully', () => {
    render(<ProgressIndicator value={-1} max={100} />);

    const progressIndicator = screen.getByTestId('progress-indicator');
    expect(progressIndicator.props.accessibilityValue.now).toBe(0);
  });
});

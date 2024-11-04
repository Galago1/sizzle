import { Text } from 'react-native';
import { render, screen } from '@testing-library/react-native';
import { ScreenContent } from './ScreenContent';

// Mock the EditScreenInfo component
jest.mock('./EditScreenInfo', () => ({
  __esModule: true,
  default: () => 'EditScreenInfo',
}));

describe('ScreenContent', () => {
  const defaultProps = {
    title: 'Test Title',
    path: 'test/path',
  };

  it('renders correctly', () => {
    render(<ScreenContent {...defaultProps} />);

    expect(screen.getByTestId('screen-content')).toBeTruthy();
    expect(screen.getByTestId('screen-title')).toBeTruthy();
    expect(screen.getByTestId('screen-separator')).toBeTruthy();
  });

  it('displays the correct title', () => {
    render(<ScreenContent {...defaultProps} />);

    expect(screen.getByText('Test Title')).toBeTruthy();
  });

  it('renders children when provided', () => {
    render(
      <ScreenContent {...defaultProps}>
        <Text testID="child-element">Child Content</Text>
      </ScreenContent>
    );

    expect(screen.getByTestId('child-element')).toBeTruthy();
    expect(screen.getByText('Child Content')).toBeTruthy();
  });
});

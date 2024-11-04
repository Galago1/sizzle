import { render, screen } from '@testing-library/react-native';
import { Text } from './Text';

describe('Text', () => {
  it('renders correctly with default props', () => {
    render(<Text>Hello World</Text>);

    const textElement = screen.getByTestId('text');
    expect(textElement).toBeTruthy();
  });

  it('renders correctly with custom variant and color', () => {
    render(
      <Text variant="title1" color="secondary">
        Custom Text
      </Text>
    );

    const textElement = screen.getByTestId('text');
    expect(textElement).toBeTruthy();
  });

  it('renders correctly with custom testID', () => {
    render(<Text testID="custom-text">Custom TestID</Text>);

    const textElement = screen.getByTestId('custom-text');
    expect(textElement).toBeTruthy();
  });
});

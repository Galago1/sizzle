import { render, screen } from '@testing-library/react-native';
import { Container } from './Container';
import { Text } from 'react-native';

describe('Container', () => {
  it('renders correctly', () => {
    render(
      <Container>
        <Text>Test Content</Text>
      </Container>
    );

    expect(screen.getByTestId('container')).toBeTruthy();
  });
});

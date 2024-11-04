import { render, screen } from '@testing-library/react-native';
import { TopNav } from './TopNav';

describe('TopNav', () => {
  it('renders correctly', () => {
    const testTitle = 'Test Title';

    render(<TopNav title={testTitle} />);

    expect(screen.getByTestId('top-nav')).toBeTruthy();
    expect(screen.getByText(testTitle)).toBeTruthy();
  });
});

import { render, screen } from '@testing-library/react-native';
import EditScreenInfo from './EditScreenInfo';

describe('EditScreenInfo', () => {
  it('renders correctly', () => {
    const testPath = 'app/test-path.tsx';
    render(<EditScreenInfo path={testPath} />);

    expect(screen.getByTestId('edit-screen-info')).toBeTruthy();
    expect(screen.getByTestId('title-text')).toBeTruthy();
    expect(screen.getByTestId('path-container')).toBeTruthy();
    expect(screen.getByTestId('path-text')).toBeTruthy();
    expect(screen.getByTestId('description-text')).toBeTruthy();
  });

  it('displays the correct path', () => {
    const testPath = 'app/test-path.tsx';
    render(<EditScreenInfo path={testPath} />);

    expect(screen.getByTestId('path-text').props.children).toBe(testPath);
  });
});

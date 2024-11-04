import { render, screen } from '@testing-library/react-native';
import { SplashScreen } from './SplashScreen';

describe('SplashScreen', () => {
  it('renders correctly', () => {
    render(<SplashScreen />);

    expect(screen.getByTestId('splash-screen')).toBeTruthy();
    expect(screen.getByTestId('splash-image')).toBeTruthy();
    expect(screen.getByTestId('splash-text')).toBeTruthy();
    expect(screen.getByText('sizzle')).toBeTruthy();
  });
});

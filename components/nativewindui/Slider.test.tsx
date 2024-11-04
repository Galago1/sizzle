import { render, screen } from '@testing-library/react-native';
import { Slider } from './Slider';

// Mock the useColorScheme hook
jest.mock('~/lib/useColorScheme', () => ({
  useColorScheme: () => ({
    colors: {
      primary: '#000000',
    },
  }),
}));

// Mock Platform
jest.mock('react-native/Libraries/Utilities/Platform', () => ({
  OS: 'ios',
  select: jest.fn(),
}));

describe('Slider', () => {
  it('renders correctly', () => {
    render(<Slider />);

    expect(screen.getByTestId('slider')).toBeTruthy();
  });
});

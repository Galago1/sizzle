import { render, screen } from '@testing-library/react-native';
import { Bar, BarGroup } from './Bar';
import { View } from 'react-native';

// Mock expo-router
jest.mock('expo-router', () => ({
  Link: ({ children }: { children: React.ReactNode }) => children,
}));

// Mock expo vector icons
jest.mock('@expo/vector-icons', () => ({
  MaterialCommunityIcons: () => 'Icon',
}));

describe('Bar', () => {
  it('renders correctly with minimum props', () => {
    render(<Bar title="Test Title" link="/test" />);

    expect(screen.getByTestId('bar-touchable')).toBeTruthy();
    expect(screen.getByTestId('bar-content')).toBeTruthy();
    expect(screen.getByTestId('bar-title')).toBeTruthy();
    expect(screen.getByTestId('bar-end-adornment')).toBeTruthy();
    expect(screen.getByText('Test Title')).toBeTruthy();
  });

  it('renders with startAdornment', () => {
    render(
      <Bar title="Test Title" link="/test" startAdornment={<View testID="start-adornment" />} />
    );

    expect(screen.getByTestId('start-adornment')).toBeTruthy();
  });

  it('renders with endAdornment', () => {
    render(
      <Bar title="Test Title" link="/test" endAdornment={<View testID="custom-end-adornment" />} />
    );

    expect(screen.getByTestId('custom-end-adornment')).toBeTruthy();
  });
});

describe('BarGroup', () => {
  it('renders correctly with children', () => {
    render(
      <BarGroup>
        <Bar title="Test 1" link="/test1" />
        <Bar title="Test 2" link="/test2" />
      </BarGroup>
    );

    expect(screen.getByTestId('bar-group')).toBeTruthy();
    expect(screen.getAllByTestId('bar-touchable')).toHaveLength(2);
    expect(screen.getByText('Test 1')).toBeTruthy();
    expect(screen.getByText('Test 2')).toBeTruthy();
  });
});

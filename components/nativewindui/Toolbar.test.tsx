import { render, screen } from '@testing-library/react-native';
import { Toolbar, ToolbarIcon, ToolbarCTA } from './Toolbar';

// Mock the required dependencies
jest.mock('@roninoss/icons', () => ({
  Icon: () => null,
}));

jest.mock('expo-blur', () => {
  const { View } = require('react-native');
  return {
    BlurView: ({ children, testID }: any) => <View testID={testID}>{children}</View>,
  };
});

jest.mock('react-native-safe-area-context', () => ({
  useSafeAreaInsets: () => ({
    bottom: 0,
    top: 0,
    left: 0,
    right: 0,
  }),
}));

jest.mock('~/lib/useColorScheme', () => ({
  useColorScheme: () => ({
    colors: {
      primary: '#000000',
      foreground: '#000000',
    },
  }),
}));

// Mock the Text component since it might be using NativeWind
jest.mock('~/components/nativewindui/Text', () => {
  const { Text: RNText } = require('react-native');
  return {
    Text: ({ children, testID }: any) => <RNText testID={testID}>{children}</RNText>,
  };
});

// Mock the Button component
jest.mock('~/components/nativewindui/Button', () => {
  const { View } = require('react-native');
  return {
    Button: ({ children, testID }: any) => <View testID={testID}>{children}</View>,
  };
});

describe('Toolbar', () => {
  it('renders correctly with basic props', () => {
    render(<Toolbar />);
    expect(screen.getByTestId('toolbar')).toBeTruthy();
    expect(screen.getByTestId('toolbar-left')).toBeTruthy();
    expect(screen.getByTestId('toolbar-right')).toBeTruthy();
  });

  it('renders with iOS hint', () => {
    render(<Toolbar iosHint="Test Hint" />);
    expect(screen.getByTestId('toolbar-hint')).toBeTruthy();
    expect(screen.getByText('Test Hint')).toBeTruthy();
  });

  it('renders with left and right views', () => {
    render(
      <Toolbar
        leftView={<ToolbarIcon icon={{ name: 'arrow-back' }} />}
        rightView={<ToolbarCTA icon={{ name: 'check' }} />}
      />
    );
    expect(screen.getByTestId('toolbar-left')).toBeTruthy();
    expect(screen.getByTestId('toolbar-right')).toBeTruthy();
  });
});

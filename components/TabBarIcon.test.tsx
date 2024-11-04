import { render, screen } from '@testing-library/react-native';
import { TabBarIcon } from './TabBarIcon';

// Mock the FontAwesome component
jest.mock('@expo/vector-icons/FontAwesome', () => ({
  __esModule: true,
  default: function MockedFontAwesome(props: any) {
    return <div testID={props.testID}>FontAwesome Icon</div>;
  },
}));

describe('TabBarIcon', () => {
  it('renders correctly', () => {
    render(<TabBarIcon name="home" color="#000000" />);

    expect(screen.getByTestId('tab-bar-icon')).toBeTruthy();
  });
});

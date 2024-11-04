import { render, screen } from '@testing-library/react-native';
import { Sheet } from './Sheet';
import { BottomSheetModal } from '@gorhom/bottom-sheet';

// Mock the useColorScheme hook
jest.mock('~/lib/useColorScheme', () => ({
  useColorScheme: () => ({
    colors: {
      card: '#FFFFFF',
      grey4: '#E0E0E0',
      grey5: '#F0F0F0',
    },
  }),
}));

// Mock BottomSheetModal
jest.mock('@gorhom/bottom-sheet', () => ({
  BottomSheetModal: jest.fn(({ testID, children }) => <div testID={testID}>{children}</div>),
  BottomSheetBackdrop: jest.fn(({ children }) => <div>{children}</div>),
}));

describe('Sheet', () => {
  it('renders correctly', () => {
    render(<Sheet />);

    expect(screen.getByTestId('bottom-sheet')).toBeTruthy();
  });
});

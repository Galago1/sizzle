import { render, screen, fireEvent } from '@testing-library/react-native';
import ChipList from './ChipList';

// Mock the Chip component since we're only testing ChipList
jest.mock('./Chip', () => {
  const MockChip = ({ testID, onPress, label }: any) => (
    <div testID={testID} onClick={onPress}>
      {label}
    </div>
  );
  return MockChip;
});

describe('ChipList', () => {
  const mockLabels = ['Label 1', 'Label 2', 'Label 3'];
  const mockOnSelectionChange = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('renders correctly with basic props', () => {
    render(<ChipList labels={mockLabels} />);

    expect(screen.getByTestId('chip-list')).toBeTruthy();
    mockLabels.forEach((label) => {
      expect(screen.getByTestId(`chip-${label}`)).toBeTruthy();
    });
  });

  it('handles chip selection', () => {
    render(
      <ChipList labels={mockLabels} selectedLabels={[]} onSelectionChange={mockOnSelectionChange} />
    );

    fireEvent.press(screen.getByTestId('chip-Label 1'));
    expect(mockOnSelectionChange).toHaveBeenCalledWith(['Label 1']);
  });

  it('handles chip deselection', () => {
    render(
      <ChipList
        labels={mockLabels}
        selectedLabels={['Label 1']}
        onSelectionChange={mockOnSelectionChange}
      />
    );

    fireEvent.press(screen.getByTestId('chip-Label 1'));
    expect(mockOnSelectionChange).toHaveBeenCalledWith([]);
  });
});

import { render, screen, fireEvent } from '@testing-library/react-native';
import { Tabs } from './Tabs';

describe('Tabs', () => {
  const mockTabs = [
    { id: 'tab1', label: 'Tab 1' },
    { id: 'tab2', label: 'Tab 2' },
  ];
  const mockOnSelect = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('renders correctly', () => {
    render(<Tabs tabs={mockTabs} selectedId="tab1" onSelect={mockOnSelect} />);

    expect(screen.getByTestId('tabs-container')).toBeTruthy();
    expect(screen.getByTestId('tab-tab1')).toBeTruthy();
    expect(screen.getByTestId('tab-tab2')).toBeTruthy();
    expect(screen.getByText('Tab 1')).toBeTruthy();
    expect(screen.getByText('Tab 2')).toBeTruthy();
  });

  it('calls onSelect when a tab is pressed', () => {
    render(<Tabs tabs={mockTabs} selectedId="tab1" onSelect={mockOnSelect} />);

    fireEvent.press(screen.getByTestId('tab-tab2'));
    expect(mockOnSelect).toHaveBeenCalledWith('tab2');
  });
});

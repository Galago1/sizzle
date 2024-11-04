import { render, screen } from '@testing-library/react-native';
import * as React from 'react';
import { List, ListItem, ListSectionHeader } from './List';

// Mock the safe area context
jest.mock('react-native-safe-area-context', () => ({
  useSafeAreaInsets: () => ({ top: 0, right: 0, bottom: 0, left: 0 }),
}));

// Mock @rn-primitives/slot
jest.mock('@rn-primitives/slot', () => ({
  Slot: ({ children }: { children: React.ReactNode }) => children,
}));

// Mock expo-navigation-bar
jest.mock('expo-navigation-bar', () => ({
  setBackgroundColorAsync: jest.fn(),
  setButtonStyleAsync: jest.fn(),
}));

describe('List', () => {
  const mockData = [
    'Section 1',
    { title: 'Item 1', subTitle: 'Subtitle 1' },
    { title: 'Item 2' },
    'Section 2',
    { title: 'Item 3' },
  ];

  const renderItem = ({ item, ...props }: any) => {
    if (typeof item === 'string') {
      return <ListSectionHeader item={item} {...props} />;
    }
    return <ListItem item={item} {...props} />;
  };

  it('renders correctly', () => {
    render(<List data={mockData} renderItem={renderItem} estimatedItemSize={50} />);

    expect(screen.getByTestId('list-root')).toBeTruthy();
    expect(screen.getByTestId('list-flash-list')).toBeTruthy();
  });

  it('renders with insets variant', () => {
    render(
      <List data={mockData} renderItem={renderItem} estimatedItemSize={50} variant="insets" />
    );

    expect(screen.getByTestId('list-root')).toBeTruthy();
  });

  it('renders with section header as gap', () => {
    render(
      <List
        data={mockData}
        renderItem={renderItem}
        estimatedItemSize={50}
        sectionHeaderAsGap={true}
      />
    );

    expect(screen.getByTestId('list-root')).toBeTruthy();
  });
});

import { render, screen } from '@testing-library/react-native';
import * as React from 'react';
import { Card, CardContent, CardTitle, CardDescription } from './Card';

// Add mocks for external dependencies
jest.mock('@rn-primitives/slot', () => ({
  Image: 'SlotImage',
}));

jest.mock('expo-blur', () => ({
  BlurView: 'BlurView',
}));

jest.mock('expo-linear-gradient', () => ({
  LinearGradient: 'LinearGradient',
}));

jest.mock('expo-image', () => ({
  Image: 'Image',
}));

// Mock the useColorScheme hook
jest.mock('~/lib/useColorScheme', () => ({
  useColorScheme: () => ({
    colors: {
      card: 'rgb(255, 255, 255)',
    },
  }),
}));

describe('Card', () => {
  it('renders basic card correctly', () => {
    render(
      <Card>
        <CardContent>
          <CardTitle>Test Title</CardTitle>
          <CardDescription>Test Description</CardDescription>
        </CardContent>
      </Card>
    );

    expect(screen.getByTestId('card-root')).toBeTruthy();
    expect(screen.getByTestId('card-container')).toBeTruthy();
    expect(screen.getByText('Test Title')).toBeTruthy();
    expect(screen.getByText('Test Description')).toBeTruthy();
  });
});

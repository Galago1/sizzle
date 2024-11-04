import { render, screen } from '@testing-library/react-native';
import React from 'react';

import { Stepper } from './Stepper';

// Add mock for @roninoss/icons
jest.mock('@roninoss/icons', () => ({
  Icon: () => 'Icon',
}));

// Mock the useColorScheme hook
jest.mock('~/lib/useColorScheme', () => ({
  useColorScheme: () => ({
    colors: {
      foreground: '#000000',
    },
  }),
}));

describe('Stepper', () => {
  it('renders correctly', () => {
    render(<Stepper />);

    expect(screen.getByTestId('stepper')).toBeTruthy();
    expect(screen.getByTestId('subtract-button')).toBeTruthy();
    expect(screen.getByTestId('add-button')).toBeTruthy();
  });

  it('handles disabled state correctly', () => {
    render(<Stepper subtractButton={{ disabled: true }} addButton={{ disabled: true }} />);

    const subtractButton = screen.getByTestId('subtract-button');
    const addButton = screen.getByTestId('add-button');

    expect(subtractButton.props.accessibilityState.disabled).toBe(true);
    expect(addButton.props.accessibilityState.disabled).toBe(true);
  });
});

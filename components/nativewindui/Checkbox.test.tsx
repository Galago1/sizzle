import { fireEvent, render, screen } from '@testing-library/react-native';
import { Checkbox } from './Checkbox';

// Add mock for @roninoss/icons
jest.mock('@roninoss/icons', () => ({
  Icon: () => 'Icon',
}));

// Add mock for @rn-primitives/checkbox
jest.mock('@rn-primitives/checkbox', () => ({
  Root: ({ children, testID, checked, onCheckedChange, disabled }) => (
    <div
      testID={testID}
      checked={checked}
      disabled={disabled}
      onPress={() => onCheckedChange && onCheckedChange(!checked)}>
      {children}
    </div>
  ),
  Indicator: ({ children, testID }) => <div testID={testID}>{children}</div>,
}));

describe('Checkbox', () => {
  it('renders correctly', () => {
    render(<Checkbox />);

    expect(screen.getByTestId('checkbox-root')).toBeTruthy();
    expect(screen.getByTestId('checkbox-indicator')).toBeTruthy();
  });

  it('handles check state changes', () => {
    const onCheckedChange = jest.fn();
    render(<Checkbox onCheckedChange={onCheckedChange} />);

    const checkbox = screen.getByTestId('checkbox-root');
    fireEvent.press(checkbox);

    expect(onCheckedChange).toHaveBeenCalledWith(true);
  });

  it('respects defaultChecked prop', () => {
    render(<Checkbox defaultChecked />);

    const checkbox = screen.getByTestId('checkbox-root');
    expect(checkbox.props.checked).toBe(true);
  });

  it('respects disabled state', () => {
    render(<Checkbox disabled />);

    const checkbox = screen.getByTestId('checkbox-root');
    expect(checkbox.props.disabled).toBe(true);
  });
});

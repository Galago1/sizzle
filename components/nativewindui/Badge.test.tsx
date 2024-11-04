import { render, screen } from '@testing-library/react-native';
import { Badge } from './Badge';

describe('Badge', () => {
  it('renders correctly without children', () => {
    render(<Badge />);

    expect(screen.getByTestId('badge')).toBeTruthy();
    expect(screen.getByTestId('badge-text')).toBeTruthy();
  });

  it('renders correctly with count', () => {
    render(<Badge>5</Badge>);

    const badgeText = screen.getByTestId('badge-text');
    expect(badgeText.props.children).toBe('5');
  });

  it('handles maxCount correctly', () => {
    render(<Badge maxCount={99}>100</Badge>);

    const badgeText = screen.getByTestId('badge-text');
    expect(badgeText.props.children).toBe('99+');
  });

  it('renders with info variant', () => {
    render(<Badge variant="info" />);

    const badge = screen.getByTestId('badge');
    expect(badge.props.className).toContain('bg-primary');
  });

  it('renders with destructive variant', () => {
    render(<Badge variant="destructive" />);

    const badge = screen.getByTestId('badge');
    expect(badge.props.className).toContain('bg-destructive');
  });
});

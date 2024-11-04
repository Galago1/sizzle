import { render, screen } from '@testing-library/react-native';
import AvatarAndText from './AvatarAndText';

// Mock the Avatar components
jest.mock('./nativewindui/Avatar', () => ({
  Avatar: ({ children, testID }: any) => children,
  AvatarImage: ({ testID }: any) => `AvatarImage-${testID}`,
  AvatarFallback: ({ children, testID }: any) => children,
}));

describe('AvatarAndText', () => {
  const defaultProps = {
    title: 'John Doe',
    subtitle: 'Software Engineer',
  };

  it('renders correctly with avatar URL', () => {
    render(<AvatarAndText {...defaultProps} avatarUrl="https://example.com/avatar.jpg" />);

    expect(screen.getByTestId('avatar-and-text')).toBeTruthy();
    expect(screen.getByTestId('title')).toBeTruthy();
    expect(screen.getByTestId('subtitle')).toBeTruthy();
  });

  it('renders correctly with fallback text', () => {
    render(<AvatarAndText {...defaultProps} fallbackText="JD" />);

    expect(screen.getByTestId('avatar-and-text')).toBeTruthy();
    expect(screen.getByTestId('fallback-text')).toBeTruthy();
    expect(screen.getByTestId('title')).toBeTruthy();
    expect(screen.getByTestId('subtitle')).toBeTruthy();
  });

  it('renders correctly without avatar URL or fallback text', () => {
    render(<AvatarAndText {...defaultProps} />);

    expect(screen.getByTestId('avatar-and-text')).toBeTruthy();
    expect(screen.queryByTestId('fallback-text')).toBeNull();
    expect(screen.getByTestId('title')).toBeTruthy();
    expect(screen.getByTestId('subtitle')).toBeTruthy();
  });
});

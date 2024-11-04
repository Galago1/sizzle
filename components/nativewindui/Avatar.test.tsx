import { render, screen } from '@testing-library/react-native';
import { Avatar, AvatarImage, AvatarFallback } from './Avatar';

// Mock @rn-primitives/avatar
jest.mock('@rn-primitives/avatar', () => ({
  Root: ({ children, testID, className, ...props }) => (
    <div testID={testID} className={className} {...props}>
      {children}
    </div>
  ),
  Image: ({ testID, className, ...props }) => (
    <img testID={testID} className={className} {...props} />
  ),
  Fallback: ({ children, testID, className, ...props }) => (
    <div testID={testID} className={className} {...props}>
      {children}
    </div>
  ),
}));

describe('Avatar', () => {
  it('renders Avatar with image correctly', () => {
    render(
      <Avatar>
        <AvatarImage source={{ uri: 'https://example.com/avatar.jpg' }} />
      </Avatar>
    );

    expect(screen.getByTestId('avatar-root')).toBeTruthy();
    expect(screen.getByTestId('avatar-image')).toBeTruthy();
  });

  it('renders Avatar with fallback correctly', () => {
    render(
      <Avatar>
        <AvatarFallback>JD</AvatarFallback>
      </Avatar>
    );

    expect(screen.getByTestId('avatar-root')).toBeTruthy();
    expect(screen.getByTestId('avatar-fallback')).toBeTruthy();
  });

  it('applies custom className to Avatar', () => {
    render(<Avatar className="test-class" />);

    const avatar = screen.getByTestId('avatar-root');
    expect(avatar.props.className).toContain('test-class');
  });
});

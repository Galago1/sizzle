import { render, screen } from '@testing-library/react-native';
import { Form, FormSection, FormItem } from './Form';

// Add mock for @roninoss/icons
jest.mock('@roninoss/icons', () => ({
  Icon: () => 'Icon',
}));

// Mock the useColorScheme hook
jest.mock('~/lib/useColorScheme', () => ({
  useColorScheme: () => ({
    colors: {
      grey: '#666666',
    },
  }),
}));

describe('Form Components', () => {
  describe('Form', () => {
    it('renders correctly', () => {
      render(<Form />);
      expect(screen.getByTestId('form-root')).toBeTruthy();
    });
  });

  describe('FormSection', () => {
    it('renders correctly with basic props', () => {
      render(
        <FormSection>
          <FormItem>Test Item</FormItem>
        </FormSection>
      );
      expect(screen.getByTestId('form-section')).toBeTruthy();
      expect(screen.getByTestId('form-item')).toBeTruthy();
    });

    it('renders with iOS title', () => {
      render(
        <FormSection ios={{ title: 'Test Title' }}>
          <FormItem>Test Item</FormItem>
        </FormSection>
      );
      expect(screen.getByText('Test Title')).toBeTruthy();
    });

    it('renders with footnote', () => {
      render(
        <FormSection footnote="Test Footnote">
          <FormItem>Test Item</FormItem>
        </FormSection>
      );
      expect(screen.getByText('Test Footnote')).toBeTruthy();
    });
  });

  describe('FormItem', () => {
    it('renders correctly', () => {
      render(<FormItem>Test Content</FormItem>);
      expect(screen.getByTestId('form-item')).toBeTruthy();
    });

    it('renders separator when not last item on iOS', () => {
      jest.mock('react-native/Libraries/Utilities/Platform', () => ({
        OS: 'ios',
      }));

      render(<FormItem>Test Content</FormItem>);
      expect(screen.getByTestId('form-separator')).toBeTruthy();
    });
  });
});

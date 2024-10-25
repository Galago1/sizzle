import React from 'react';
import { View } from 'react-native';
import type { Meta, StoryObj } from '@storybook/react';
import { Form, FormSection, FormItem } from '../../../components/nativewindui/Form';
import { Text } from '../../../components/nativewindui/Text';

const meta = {
  title: 'Form',
  component: Form,
  argTypes: {},
  args: {},
  decorators: [
    (Story) => (
      <View style={{ flex: 1, backgroundColor: '#ffffff', padding: 16 }}>
        <Story />
      </View>
    ),
  ],
} satisfies Meta<typeof Form>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
  render: () => (
    <Form>
      <FormSection
        ios={{ title: 'Personal Information' }}
        materialIconProps={{ name: 'person' }}
        footnote="Please provide your personal details">
        <FormItem>
          <Text>Name: John Doe</Text>
        </FormItem>
        <FormItem>
          <Text>Email: john.doe@example.com</Text>
        </FormItem>
      </FormSection>
      <FormSection
        ios={{ title: 'Preferences' }}
        materialIconProps={{ name: 'settings' as any }}
        footnote="Customize your app experience">
        <FormItem>
          <Text>Theme: Dark</Text>
        </FormItem>
        <FormItem>
          <Text>Notifications: On</Text>
        </FormItem>
      </FormSection>
    </Form>
  ),
};

export const SingleSection: Story = {
  args: {},
  render: () => (
    <Form>
      <FormSection
        ios={{ title: 'Contact Information' }}
        materialIconProps={{ name: 'phone' }}
        footnote="How we can reach you">
        <FormItem>
          <Text>Phone: +1 234 567 8900</Text>
        </FormItem>
        <FormItem>
          <Text>Address: 123 Main St, City, Country</Text>
        </FormItem>
      </FormSection>
    </Form>
  ),
};

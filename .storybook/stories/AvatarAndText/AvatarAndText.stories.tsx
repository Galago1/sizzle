import React from 'react';
import { View } from 'react-native';
import type { Meta, StoryObj } from '@storybook/react';
import AvatarAndText from '../../../components/AvatarAndText';

const meta = {
  title: 'Components/AvatarAndText',
  component: AvatarAndText,
  argTypes: {
    avatarUrl: { control: 'text' },
    title: { control: 'text' },
    subtitle: { control: 'text' },
    fallbackText: { control: 'text' },
  },
  decorators: [
    (Story) => (
      <View style={{ padding: 16, backgroundColor: '#f0f0f0' }}>
        <Story />
      </View>
    ),
  ],
} satisfies Meta<typeof AvatarAndText>;

export default meta;

type Story = StoryObj<typeof meta>;

export const WithAvatar: Story = {
  args: {
    avatarUrl: 'https://example.com/avatar.jpg',
    title: 'John Doe',
    subtitle: 'Software Engineer',
  },
};

export const WithoutAvatar: Story = {
  args: {
    title: 'Jane Smith',
    subtitle: 'Product Manager',
    fallbackText: 'JS',
  },
};

export const LongText: Story = {
  args: {
    avatarUrl: 'https://example.com/avatar.jpg',
    title: 'This is a very long title that might wrap',
    subtitle: 'This is a very long subtitle that might also wrap to multiple lines',
  },
};

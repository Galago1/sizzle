import React from 'react';
import { View } from 'react-native';
import type { Meta, StoryObj } from '@storybook/react';
import { SearchInput } from '../../../components/nativewindui/SearchInput/SearchInput';

const meta = {
  title: 'SearchInput',
  component: SearchInput,
  argTypes: {
    placeholder: { control: 'text' },
    cancelText: { control: 'text' },
    value: { control: 'text' },
    onChangeText: { action: 'onChangeText' },
  },
  args: {
    placeholder: 'Search...',
    cancelText: 'Cancel',
  },
  decorators: [
    (Story) => (
      <View style={{ flex: 1, padding: 16, backgroundColor: '#ffffff' }}>
        <Story />
      </View>
    ),
  ],
} satisfies Meta<typeof SearchInput>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};

export const WithCustomPlaceholder: Story = {
  args: {
    placeholder: 'Enter your search query...',
  },
};

export const WithInitialValue: Story = {
  args: {
    value: 'Initial search',
  },
};

export const WithCustomCancelText: Story = {
  args: {
    cancelText: 'Clear',
  },
};

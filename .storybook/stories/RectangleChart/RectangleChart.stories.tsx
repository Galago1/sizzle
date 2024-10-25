import React from 'react';
import { View } from 'react-native';
import type { Meta, StoryObj } from '@storybook/react';
import RectangleChart from '../../../components/nativewindui/RectangleChart';

const meta = {
  title: 'RectangleChart',
  component: RectangleChart,
  argTypes: {
    data: { control: 'object' },
  },
  args: {
    data: Array(35)
      .fill(0)
      .map(() => Math.random()),
  },
  decorators: [
    (Story) => (
      <View style={{ flex: 1, backgroundColor: '#ffffff' }}>
        <Story />
      </View>
    ),
  ],
} satisfies Meta<typeof RectangleChart>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};

export const FullMonth: Story = {
  args: {
    data: Array(35)
      .fill(0)
      .map(() => Math.random()),
  },
};

export const LowValues: Story = {
  args: {
    data: Array(35)
      .fill(0)
      .map(() => Math.random() * 0.3),
  },
};

export const HighValues: Story = {
  args: {
    data: Array(35)
      .fill(0)
      .map(() => 0.7 + Math.random() * 0.3),
  },
};

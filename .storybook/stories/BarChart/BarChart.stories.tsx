import React from 'react';
import { View } from 'react-native';
import type { Meta, StoryObj } from '@storybook/react';
import BarChart from '../../../components/nativewindui/BarChart';

const meta = {
  title: 'BarChart',
  component: BarChart,
  argTypes: {},
  args: {},
  decorators: [
    (Story) => (
      <View style={{ flex: 1, backgroundColor: '#ffffff', padding: 20 }}>
        <Story />
      </View>
    ),
  ],
} satisfies Meta<typeof BarChart>;

export default meta;

type Story = StoryObj<typeof meta>;

const sampleData = [
  { day: 'Mon', total: 10, completed: 5 },
  { day: 'Tue', total: 15, completed: 8 },
  { day: 'Wed', total: 8, completed: 3 },
  { day: 'Thu', total: 12, completed: 10 },
  { day: 'Fri', total: 20, completed: 15 },
];

export const Default: Story = {
  args: {
    data: sampleData,
  },
};

export const LessData: Story = {
  args: {
    data: sampleData.slice(0, 3),
  },
};

export const FullWeek: Story = {
  args: {
    data: [
      ...sampleData,
      { day: 'Sat', total: 5, completed: 2 },
      { day: 'Sun', total: 3, completed: 1 },
    ],
  },
};

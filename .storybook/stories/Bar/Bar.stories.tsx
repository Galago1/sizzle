import { View } from 'react-native';
import type { Meta, StoryObj } from '@storybook/react';
import { Bar } from '../../../components/Bar';
import React from 'react';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const meta = {
  title: 'Bar',
  component: Bar,
  argTypes: {
    link: { control: 'text' },
  },
  args: {
    title: 'Example Bar',
    link: '/example',
  },
  decorators: [
    (Story) => (
      <View style={{ padding: 16, alignItems: 'flex-start', backgroundColor: '#f0f0f0' }}>
        <Story />
      </View>
    ),
  ],
} satisfies Meta<typeof Bar>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Basic: Story = {};

export const WithStartAdornment: Story = {
  args: {
    startAdornment: <MaterialCommunityIcons name="home" size={24} color="gray" />,
    title: 'Home',
  },
};

export const WithEndAdornment: Story = {
  args: {
    title: 'Custom End',
    endAdornment: <MaterialCommunityIcons name="star" size={24} color="gold" />,
  },
};

export const CustomClassName: Story = {
  args: {
    title: 'Custom Style',
    className: 'bg-blue-100',
  },
};

import React from 'react';
import { View } from 'react-native';
import type { Meta, StoryObj } from '@storybook/react';
import { Badge } from '../../../components/nativewindui/Badge';
import { Icon } from '@roninoss/icons';

const meta = {
  title: 'Badge',
  component: Badge,
  argTypes: {
    variant: {
      control: 'select',
      options: ['info', 'destructive'],
    },
    maxCount: {
      control: 'number',
    },
    textVariant: {
      control: 'select',
      options: ['caption1', 'caption2', 'footnote', 'subheadline'], // Add more options as needed
    },
  },
  args: {
    variant: 'destructive',
    maxCount: 99,
    textVariant: 'caption2',
  },
  decorators: [
    (Story) => (
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#ffffff',
        }}>
        <Story />
      </View>
    ),
  ],
} satisfies Meta<typeof Badge>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: '6',
  },
};

export const InfoVariant: Story = {
  args: {
    variant: 'info',
    children: '3',
  },
};

export const MaxCountExceeded: Story = {
  args: {
    children: '150',
    maxCount: 99,
  },
};

export const WithoutCount: Story = {
  args: {},
};

export const BadgeWithIcon: Story = {
  args: {
    children: '12',
  },
  render: (args) => (
    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
      <View style={{ position: 'relative' }}>
        <Icon name="bell-outline" size={24} />
        <Badge {...args} />
      </View>
    </View>
  ),
};

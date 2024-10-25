import React from 'react';
import { View } from 'react-native';
import type { Meta, StoryObj } from '@storybook/react';
import { TopNav } from '../../../components/TopNav';
import { Text } from 'react-native';

const meta = {
  title: 'TopNav',
  component: TopNav,
  argTypes: {
    title: { control: 'text' },
  },
  args: {
    title: 'Default Title',
  },
  decorators: [
    (Story) => (
      <View style={{ flex: 1, backgroundColor: '#ffffff', padding: 16 }}>
        <Story />
      </View>
    ),
  ],
} satisfies Meta<typeof TopNav>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};

export const WithChildren: Story = {
  args: {
    title: 'Custom Title',
  },
  render: (args) => (
    <TopNav {...args}>
      <View style={{ backgroundColor: '#f0f0f0', padding: 8, borderRadius: 4 }}>
        <Text>Child Component</Text>
      </View>
    </TopNav>
  ),
};

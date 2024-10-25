import React from 'react';
import { View } from 'react-native';
import { BackButton } from '../../../components/BackButton';
import type { Meta, StoryObj } from '@storybook/react';
import { Text } from 'react-native';

const meta = {
  title: 'Components/BackButton',
  component: BackButton,
  argTypes: {
    onPress: { action: 'pressed' },
  },
  decorators: [
    (Story) => (
      <View style={{ padding: 20 }}>
        <Story />
      </View>
    ),
  ],
} satisfies Meta<typeof BackButton>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    onPress: () => console.log('Back button pressed'),
  },
};

export const CustomText: Story = {
  args: {
    onPress: () => console.log('Custom back button pressed'),
  },
  render: (args) => (
    <BackButton {...args}>
      <Text style={{ color: '#007AFF', marginLeft: 4 }}>Go Back</Text>
    </BackButton>
  ),
};

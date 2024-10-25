import React from 'react';
import { View } from 'react-native';
import type { Meta, StoryObj } from '@storybook/react';
import { SplashScreen } from '../../../components/SplashScreen';

const meta = {
  title: 'SplashScreen',
  component: SplashScreen,
  argTypes: {},
  args: {},
  decorators: [
    (Story) => (
      <View style={{ flex: 1, backgroundColor: '#ffffff' }}>
        <Story />
      </View>
    ),
  ],
} satisfies Meta<typeof SplashScreen>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};

export const CenteredSplashScreen: Story = {
  args: {},
  render: () => (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <SplashScreen />
    </View>
  ),
};

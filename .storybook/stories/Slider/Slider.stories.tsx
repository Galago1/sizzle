import React from 'react';
import { View } from 'react-native';
import type { Meta, StoryObj } from '@storybook/react';
import { Slider } from '../../../components/nativewindui/Slider';

const meta = {
  title: 'Slider',
  component: Slider,
  argTypes: {
    minimumValue: { control: 'number' },
    maximumValue: { control: 'number' },
    value: { control: 'number' },
    step: { control: 'number' },
    disabled: { control: 'boolean' },
  },
  args: {
    minimumValue: 0,
    maximumValue: 100,
    value: 50,
    step: 1,
    disabled: false,
  },
  decorators: [
    (Story) => (
      <View style={{ flex: 1, padding: 20, backgroundColor: '#ffffff' }}>
        <Story />
      </View>
    ),
  ],
} satisfies Meta<typeof Slider>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};

export const CustomColors: Story = {
  args: {
    thumbTintColor: '#ff0000',
    minimumTrackTintColor: '#00ff00',
    maximumTrackTintColor: '#0000ff',
  },
};

export const DisabledSlider: Story = {
  args: {
    disabled: true,
  },
};

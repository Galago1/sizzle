import React from 'react';
import { View } from 'react-native';
import type { Meta, StoryObj } from '@storybook/react';
import { Toggle } from '../../../components/nativewindui/Toggle';

const meta = {
  title: 'Toggle',
  component: Toggle,
  argTypes: {
    value: { control: 'boolean' },
    onValueChange: { action: 'onValueChange' },
  },
  args: {
    value: false,
  },
  decorators: [
    (Story) => (
      <View style={{ flex: 1, backgroundColor: '#ffffff', padding: 20 }}>
        <Story />
      </View>
    ),
  ],
} satisfies Meta<typeof Toggle>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};

export const Checked: Story = {
  args: {
    value: true,
  },
};

export const MultipleToggles: Story = {
  args: {},
  render: () => (
    <View style={{ flexDirection: 'column', gap: 20 }}>
      <Toggle value={false} />
      <Toggle value={true} />
      <Toggle value={false} />
    </View>
  ),
};

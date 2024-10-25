import React from 'react';
import { View } from 'react-native';
import type { Meta, StoryObj } from '@storybook/react';
import { Checkbox } from '../../../components/nativewindui/Checkbox';

const meta = {
  title: 'Checkbox',
  component: Checkbox,
  argTypes: {
    checked: { control: 'boolean' },
    disabled: { control: 'boolean' },
  },
  args: {
    checked: false,
    disabled: false,
  },
  decorators: [
    (Story) => (
      <View style={{ flex: 1, backgroundColor: '#ffffff', padding: 20 }}>
        <Story />
      </View>
    ),
  ],
} satisfies Meta<typeof Checkbox>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};

export const Checked: Story = {
  args: {
    checked: true,
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
  },
};

export const CheckedAndDisabled: Story = {
  args: {
    checked: true,
    disabled: true,
  },
};

export const MultipleCheckboxes: Story = {
  args: {},
  render: () => (
    <View style={{ flexDirection: 'column', gap: 10 }}>
      <Checkbox />
      <Checkbox checked={true} />
      <Checkbox disabled={true} />
      <Checkbox checked={true} disabled={true} />
    </View>
  ),
};

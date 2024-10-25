import React from 'react';
import { View } from 'react-native';
import type { Meta, StoryObj } from '@storybook/react';
import { Picker, PickerItem } from '../../../components/nativewindui/Picker';

const meta = {
  title: 'Picker',
  component: Picker,
  argTypes: {
    mode: {
      control: 'select',
      options: ['dropdown', 'dialog'],
    },
  },
  args: {
    mode: 'dropdown',
  },
  decorators: [
    (Story) => (
      <View style={{ flex: 1, padding: 20, backgroundColor: '#ffffff' }}>
        <Story />
      </View>
    ),
  ],
} satisfies Meta<typeof Picker>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
  render: (args) => (
    <Picker {...args}>
      <PickerItem label="Option 1" value="1" />
      <PickerItem label="Option 2" value="2" />
      <PickerItem label="Option 3" value="3" />
    </Picker>
  ),
};

export const CustomStyle: Story = {
  args: {
    style: { backgroundColor: '#f0f0f0', borderRadius: 12 },
    dropdownIconColor: '#007AFF',
  },
  render: (args) => (
    <Picker {...args}>
      <PickerItem label="Apple" value="apple" />
      <PickerItem label="Banana" value="banana" />
      <PickerItem label="Cherry" value="cherry" />
    </Picker>
  ),
};

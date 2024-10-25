import React from 'react';
import { View } from 'react-native';
import type { Meta, StoryObj } from '@storybook/react';
import { Sheet } from '../../../components/nativewindui/Sheet';

const meta = {
  title: 'Sheet',
  component: Sheet,
  argTypes: {},
  args: {},
  decorators: [
    (Story) => (
      <View style={{ flex: 1, backgroundColor: '#ffffff' }}>
        <Story />
      </View>
    ),
  ],
} satisfies Meta<typeof Sheet>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    // Add any default props for the Sheet component here
    // For example:
    // isOpen: true,
    // onClose: () => console.log('Sheet closed'),
  },
};

export const BottomSheet: Story = {
  args: {
    // Add props for a bottom sheet variant
    // For example:
    // isOpen: true,
    // position: 'bottom',
    // height: '50%',
  },
};

export const CustomContent: Story = {
  args: {
    // Add props for a sheet with custom content
  },
  render: () => (
    <Sheet>
      <View style={{ padding: 20 }}>
        <View
          style={{
            width: 40,
            height: 4,
            backgroundColor: '#ccc',
            alignSelf: 'center',
            marginBottom: 20,
          }}
        />
        <View style={{ height: 200, justifyContent: 'center', alignItems: 'center' }}>
          <View style={{ width: 50, height: 50, backgroundColor: '#007AFF', borderRadius: 25 }} />
        </View>
      </View>
    </Sheet>
  ),
};

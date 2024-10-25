import React from 'react';
import { View } from 'react-native';
import type { Meta, StoryObj } from '@storybook/react';
import { Toolbar, ToolbarIcon, ToolbarCTA } from '../../../components/nativewindui/Toolbar';

const meta = {
  title: 'Toolbar',
  component: Toolbar,
  argTypes: {
    iosHint: { control: 'text' },
    iosBlurIntensity: { control: { type: 'range', min: 0, max: 100, step: 1 } },
  },
  args: {
    iosHint: '',
    iosBlurIntensity: 60,
  },
  decorators: [
    (Story) => (
      <View style={{ flex: 1, backgroundColor: '#f0f0f0', paddingTop: 20 }}>
        <Story />
      </View>
    ),
  ],
} satisfies Meta<typeof Toolbar>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
  render: (args) => (
    <Toolbar
      {...args}
      leftView={<ToolbarIcon icon={{ name: 'arrow-back' }} />}
      rightView={<ToolbarCTA icon={{ name: 'check' }} />}
    />
  ),
};

export const WithIOSHint: Story = {
  args: {
    iosHint: 'Swipe to delete',
  },
  render: (args) => (
    <Toolbar
      {...args}
      leftView={<ToolbarIcon icon={{ name: 'menu' }} />}
      rightView={<ToolbarIcon icon={{ name: 'more-vert' }} />}
    />
  ),
};

export const MultipleIcons: Story = {
  args: {},
  render: (args) => (
    <Toolbar
      {...args}
      leftView={
        <>
          <ToolbarIcon icon={{ name: 'arrow-back' }} />
          <ToolbarIcon icon={{ name: 'search' }} />
        </>
      }
      rightView={
        <>
          <ToolbarIcon icon={{ name: 'favorite' }} />
          <ToolbarCTA icon={{ name: 'share' }} />
        </>
      }
    />
  ),
};

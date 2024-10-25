import React from 'react';
import { View } from 'react-native';
import type { Meta, StoryObj } from '@storybook/react';
import { TextField } from '../../../components/nativewindui/TextField/TextField';

const meta = {
  title: 'TextField',
  component: TextField,
  argTypes: {
    label: { control: 'text' },
    placeholder: { control: 'text' },
    value: { control: 'text' },
    errorMessage: { control: 'text' },
    materialVariant: { control: 'radio', options: ['outlined', 'filled'] },
    editable: { control: 'boolean' },
  },
  args: {
    label: 'Label',
    placeholder: 'Enter text...',
    materialVariant: 'outlined',
    editable: true,
  },
  decorators: [
    (Story) => (
      <View style={{ flex: 1, padding: 16, backgroundColor: '#ffffff' }}>
        <Story />
      </View>
    ),
  ],
} satisfies Meta<typeof TextField>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};

export const FilledVariant: Story = {
  args: {
    materialVariant: 'filled',
  },
};

export const WithError: Story = {
  args: {
    errorMessage: 'This field is required',
  },
};

export const Disabled: Story = {
  args: {
    editable: false,
  },
};

export const WithValue: Story = {
  args: {
    value: 'Sample text',
  },
};

import React, { useState } from 'react';
import { View, Text } from 'react-native';
import type { Meta, StoryObj } from '@storybook/react';
import { Stepper } from '../../../components/nativewindui/Stepper';

const meta = {
  title: 'Stepper',
  component: Stepper,
  argTypes: {},
  args: {},
  decorators: [
    (Story) => (
      <View style={{ flex: 1, backgroundColor: '#ffffff', padding: 20 }}>
        <Story />
      </View>
    ),
  ],
} satisfies Meta<typeof Stepper>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};

export const InteractiveStepper: Story = {
  args: {},
  render: () => {
    const [count, setCount] = useState(0);
    return (
      <View style={{ alignItems: 'center' }}>
        <Stepper
          subtractButton={{
            onPress: () => setCount((prev) => Math.max(0, prev - 1)),
            disabled: count === 0,
          }}
          addButton={{
            onPress: () => setCount((prev) => prev + 1),
          }}
        />
        <Text style={{ marginTop: 20, fontSize: 18 }}>Count: {count}</Text>
      </View>
    );
  },
};

export const CustomizedStepper: Story = {
  args: {},
  render: () => (
    <Stepper
      className="bg-blue-100 dark:bg-blue-900"
      subtractButton={{
        className: 'bg-blue-200 dark:bg-blue-800',
      }}
      addButton={{
        className: 'bg-blue-200 dark:bg-blue-800',
      }}
    />
  ),
};

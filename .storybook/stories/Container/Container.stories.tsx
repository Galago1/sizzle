import React from 'react';
import { View, Text } from 'react-native';
import type { Meta, StoryObj } from '@storybook/react';
import { Container } from '../../../components/Container';

const meta = {
  title: 'Container',
  component: Container,
  argTypes: {
    // We don't have any props to control for Container, but we can add them if needed
  },
  args: {
    // Default args if needed
  },
  decorators: [
    (Story) => (
      <View style={{ flex: 1, backgroundColor: '#f0f0f0' }}>
        <Story />
      </View>
    ),
  ],
} satisfies Meta<typeof Container>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {
    children: null,
  },
  render: () => (
    <Container>
      <Text>This is a basic Container example</Text>
    </Container>
  ),
};

export const WithMultipleChildren: Story = {
  args: {
    children: null,
  },
  render: () => (
    <Container>
      <Text>First child</Text>
      <View style={{ height: 20 }} />
      <Text>Second child</Text>
      <View style={{ height: 20 }} />
      <Text>Third child</Text>
    </Container>
  ),
};

export const WithLongContent: Story = {
  args: {
    children: null,
  },
  render: () => (
    <Container>
      <Text>
        This is a long text content to demonstrate how the Container component handles overflow. It
        should scroll if the content exceeds the container's height.
        {Array(20).fill('More text. ').join('')}
      </Text>
    </Container>
  ),
};

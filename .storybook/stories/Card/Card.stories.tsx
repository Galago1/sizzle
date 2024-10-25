import React from 'react';
import { View } from 'react-native';
import type { Meta, StoryObj } from '@storybook/react';
import {
  Card,
  CardContent,
  CardTitle,
  CardDescription,
} from '../../../components/nativewindui/Card';

const meta = {
  title: 'Card',
  component: Card,
  argTypes: {},
  args: {},
  decorators: [
    (Story) => (
      <View style={{ flex: 1, padding: 16, backgroundColor: '#f0f0f0' }}>
        <Story />
      </View>
    ),
  ],
} satisfies Meta<typeof Card>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
  render: () => (
    <Card>
      <CardContent>
        <CardTitle>Card Title</CardTitle>
        <CardDescription>This is a description for the card.</CardDescription>
      </CardContent>
    </Card>
  ),
};

export const WithCustomContent: Story = {
  args: {},
  render: () => (
    <Card>
      <CardContent>
        <CardTitle>Custom Card</CardTitle>
        <CardDescription>This card has custom content and styling.</CardDescription>
        <View style={{ marginTop: 16, backgroundColor: '#e0e0e0', padding: 8, borderRadius: 4 }}>
          <CardDescription>Additional custom content can be added here.</CardDescription>
        </View>
      </CardContent>
    </Card>
  ),
};

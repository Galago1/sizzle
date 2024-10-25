import React from 'react';
import { View } from 'react-native';
import type { Meta, StoryObj } from '@storybook/react';
import { Text } from '../../../components/nativewindui/Text';

const meta = {
  title: 'Text',
  component: Text,
  argTypes: {
    variant: {
      control: 'select',
      options: [
        'largeTitle',
        'title1',
        'title2',
        'title3',
        'heading',
        'body',
        'callout',
        'subhead',
        'footnote',
        'caption1',
        'caption2',
      ],
    },
    color: {
      control: 'select',
      options: ['primary', 'secondary', 'tertiary', 'quarternary'],
    },
  },
  args: {
    children: 'Sample Text',
  },
  decorators: [
    (Story) => (
      <View style={{ flex: 1, padding: 16, backgroundColor: '#ffffff' }}>
        <Story />
      </View>
    ),
  ],
} satisfies Meta<typeof Text>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};

export const LargeTitle: Story = {
  args: {
    variant: 'largeTitle',
    children: 'Large Title Text',
  },
};

export const SecondaryColor: Story = {
  args: {
    color: 'secondary',
    children: 'Secondary Color Text',
  },
};

export const CustomText: Story = {
  args: {
    variant: 'heading',
    color: 'tertiary',
    children: 'Custom Heading Text',
  },
};

export const AllVariants: Story = {
  render: () => (
    <View>
      {[
        'largeTitle',
        'title1',
        'title2',
        'title3',
        'heading',
        'body',
        'callout',
        'subhead',
        'footnote',
        'caption1',
        'caption2',
      ].map((variant) => (
        <Text key={variant} variant={variant as any}>
          {variant} text
        </Text>
      ))}
    </View>
  ),
};

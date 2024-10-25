import React from 'react';
import { View } from 'react-native';
import type { Meta, StoryObj } from '@storybook/react';
import { List, ListItem, ListSectionHeader } from '../../../components/nativewindui/List';

const meta = {
  title: 'List',
  component: List,
  argTypes: {
    variant: {
      control: 'select',
      options: ['insets', 'full-width'],
    },
    sectionHeaderAsGap: {
      control: 'boolean',
    },
  },
  args: {
    variant: 'full-width',
    sectionHeaderAsGap: false,
  },
  decorators: [
    (Story) => (
      <View style={{ flex: 1, backgroundColor: '#ffffff' }}>
        <Story />
      </View>
    ),
  ],
} satisfies Meta<typeof List>;

export default meta;

type Story = StoryObj<typeof meta>;

const sampleData = [
  'Section 1',
  { title: 'Item 1', subTitle: 'Subtitle 1' },
  { title: 'Item 2', subTitle: 'Subtitle 2' },
  'Section 2',
  { title: 'Item 3' },
  { title: 'Item 4' },
];

export const Default: Story = {
  args: {},
  render: (args) => (
    <List
      {...args}
      data={sampleData}
      renderItem={({ item, ...props }) =>
        typeof item === 'string' ? (
          <ListSectionHeader item={item} {...props} />
        ) : (
          <ListItem item={item} {...props} />
        )
      }
    />
  ),
};

export const InsetsVariant: Story = {
  args: {
    variant: 'insets',
  },
  render: Default.render,
};

export const SectionHeaderAsGap: Story = {
  args: {
    sectionHeaderAsGap: true,
  },
  render: Default.render,
};

export const CustomRenderItem: Story = {
  args: {},
  render: (args) => (
    <List
      {...args}
      data={sampleData}
      renderItem={({ item, ...props }) =>
        typeof item === 'string' ? (
          <ListSectionHeader item={item} {...props} textClassName="text-blue-500 font-bold" />
        ) : (
          <ListItem
            item={item}
            {...props}
            titleClassName="text-green-600"
            subTitleClassName="text-gray-500"
            rightView={
              <View style={{ width: 20, height: 20, backgroundColor: 'red', borderRadius: 10 }} />
            }
          />
        )
      }
    />
  ),
};

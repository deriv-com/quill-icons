import type { Meta, StoryObj } from '@storybook/react';

import { LabelPairedHouseBlankSmBoldIcon } from '../src/react/LabelPaired';

const meta = {
  title: 'label-paired/LabelPairedHouseBlankSmBoldIcon',
  component: LabelPairedHouseBlankSmBoldIcon,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    fill: { control: { type: 'color' } },
    iconSize: {
      control: {
        type: 'radio',
      },
      options: ['sm', 'md', 'lg', 'xl', '2xl'],
      defaultValue: 'md',
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof LabelPairedHouseBlankSmBoldIcon>;

export default meta;

type Story = StoryObj<typeof LabelPairedHouseBlankSmBoldIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};

import type { Meta, StoryObj } from '@storybook/react';

import { LabelPairedHouseBlankSmRegularIcon } from '../src/react/LabelPaired';

const meta = {
  title: 'label-paired/LabelPairedHouseBlankSmRegularIcon',
  component: LabelPairedHouseBlankSmRegularIcon,
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
} satisfies Meta<typeof LabelPairedHouseBlankSmRegularIcon>;

export default meta;

type Story = StoryObj<typeof LabelPairedHouseBlankSmRegularIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};

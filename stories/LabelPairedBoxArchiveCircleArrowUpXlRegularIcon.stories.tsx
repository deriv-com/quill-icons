import type { Meta, StoryObj } from '@storybook/react';

import { LabelPairedBoxArchiveCircleArrowUpXlRegularIcon } from '../src/react/LabelPaired';

const meta = {
  title: 'label-paired/LabelPairedBoxArchiveCircleArrowUpXlRegularIcon',
  component: LabelPairedBoxArchiveCircleArrowUpXlRegularIcon,
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
} satisfies Meta<typeof LabelPairedBoxArchiveCircleArrowUpXlRegularIcon>;

export default meta;

type Story = StoryObj<typeof LabelPairedBoxArchiveCircleArrowUpXlRegularIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};

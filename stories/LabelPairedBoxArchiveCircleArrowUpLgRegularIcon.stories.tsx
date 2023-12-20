import type { Meta, StoryObj } from '@storybook/react';

import { LabelPairedBoxArchiveCircleArrowUpLgRegularIcon } from '../src/react/LabelPaired';

const meta = {
  title: 'label-paired/LabelPairedBoxArchiveCircleArrowUpLgRegularIcon',
  component: LabelPairedBoxArchiveCircleArrowUpLgRegularIcon,
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
} satisfies Meta<typeof LabelPairedBoxArchiveCircleArrowUpLgRegularIcon>;

export default meta;

type Story = StoryObj<typeof LabelPairedBoxArchiveCircleArrowUpLgRegularIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};

import type { Meta, StoryObj } from '@storybook/react';

import { LabelPairedBoxArchiveCircleArrowDownSmBoldIcon } from '../src/react/LabelPaired';

const meta = {
  title: 'label-paired/LabelPairedBoxArchiveCircleArrowDownSmBoldIcon',
  component: LabelPairedBoxArchiveCircleArrowDownSmBoldIcon,
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
} satisfies Meta<typeof LabelPairedBoxArchiveCircleArrowDownSmBoldIcon>;

export default meta;

type Story = StoryObj<typeof LabelPairedBoxArchiveCircleArrowDownSmBoldIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};

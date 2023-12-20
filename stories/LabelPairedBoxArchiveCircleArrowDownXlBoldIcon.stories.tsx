import type { Meta, StoryObj } from '@storybook/react';

import { LabelPairedBoxArchiveCircleArrowDownXlBoldIcon } from '../src/react/LabelPaired';

const meta = {
  title: 'label-paired/LabelPairedBoxArchiveCircleArrowDownXlBoldIcon',
  component: LabelPairedBoxArchiveCircleArrowDownXlBoldIcon,
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
} satisfies Meta<typeof LabelPairedBoxArchiveCircleArrowDownXlBoldIcon>;

export default meta;

type Story = StoryObj<typeof LabelPairedBoxArchiveCircleArrowDownXlBoldIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};

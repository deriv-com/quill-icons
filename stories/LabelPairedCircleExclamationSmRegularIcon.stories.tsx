import type { Meta, StoryObj } from '@storybook/react';

import { LabelPairedCircleExclamationSmRegularIcon } from '../src/react/LabelPaired';

const meta = {
  title: 'label-paired/LabelPairedCircleExclamationSmRegularIcon',
  component: LabelPairedCircleExclamationSmRegularIcon,
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
} satisfies Meta<typeof LabelPairedCircleExclamationSmRegularIcon>;

export default meta;

type Story = StoryObj<typeof LabelPairedCircleExclamationSmRegularIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};

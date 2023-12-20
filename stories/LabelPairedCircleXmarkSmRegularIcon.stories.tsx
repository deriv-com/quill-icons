import type { Meta, StoryObj } from '@storybook/react';

import { LabelPairedCircleXmarkSmRegularIcon } from '../src/react/LabelPaired';

const meta = {
  title: 'label-paired/LabelPairedCircleXmarkSmRegularIcon',
  component: LabelPairedCircleXmarkSmRegularIcon,
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
} satisfies Meta<typeof LabelPairedCircleXmarkSmRegularIcon>;

export default meta;

type Story = StoryObj<typeof LabelPairedCircleXmarkSmRegularIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};

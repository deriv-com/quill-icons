import type { Meta, StoryObj } from '@storybook/react';

import { LabelPairedForwardSmRegularIcon } from '../src/react/LabelPaired';

const meta = {
  title: 'label-paired/LabelPairedForwardSmRegularIcon',
  component: LabelPairedForwardSmRegularIcon,
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
} satisfies Meta<typeof LabelPairedForwardSmRegularIcon>;

export default meta;

type Story = StoryObj<typeof LabelPairedForwardSmRegularIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};

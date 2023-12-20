import type { Meta, StoryObj } from '@storybook/react';

import { LabelPairedWindowMinimizeSmRegularIcon } from '../src/react/LabelPaired';

const meta = {
  title: 'label-paired/LabelPairedWindowMinimizeSmRegularIcon',
  component: LabelPairedWindowMinimizeSmRegularIcon,
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
} satisfies Meta<typeof LabelPairedWindowMinimizeSmRegularIcon>;

export default meta;

type Story = StoryObj<typeof LabelPairedWindowMinimizeSmRegularIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};

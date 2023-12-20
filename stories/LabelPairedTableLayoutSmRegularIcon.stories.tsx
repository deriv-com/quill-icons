import type { Meta, StoryObj } from '@storybook/react';

import { LabelPairedTableLayoutSmRegularIcon } from '../src/react/LabelPaired';

const meta = {
  title: 'label-paired/LabelPairedTableLayoutSmRegularIcon',
  component: LabelPairedTableLayoutSmRegularIcon,
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
} satisfies Meta<typeof LabelPairedTableLayoutSmRegularIcon>;

export default meta;

type Story = StoryObj<typeof LabelPairedTableLayoutSmRegularIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};

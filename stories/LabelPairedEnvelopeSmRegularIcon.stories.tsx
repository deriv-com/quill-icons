import type { Meta, StoryObj } from '@storybook/react';

import { LabelPairedEnvelopeSmRegularIcon } from '../src/react/LabelPaired';

const meta = {
  title: 'label-paired/LabelPairedEnvelopeSmRegularIcon',
  component: LabelPairedEnvelopeSmRegularIcon,
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
} satisfies Meta<typeof LabelPairedEnvelopeSmRegularIcon>;

export default meta;

type Story = StoryObj<typeof LabelPairedEnvelopeSmRegularIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};

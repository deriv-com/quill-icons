import type { Meta, StoryObj } from '@storybook/react';

import { LabelPairedCircleEnvelopeSmRegularIcon } from '../src/react/LabelPaired';

const meta = {
  title: 'label-paired/LabelPairedCircleEnvelopeSmRegularIcon',
  component: LabelPairedCircleEnvelopeSmRegularIcon,
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
} satisfies Meta<typeof LabelPairedCircleEnvelopeSmRegularIcon>;

export default meta;

type Story = StoryObj<typeof LabelPairedCircleEnvelopeSmRegularIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};

import type { Meta, StoryObj } from '@storybook/react';

import { LabelPairedCircleEnvelopeSmBoldIcon } from '../src/react/LabelPaired';

const meta = {
  title: 'label-paired/LabelPairedCircleEnvelopeSmBoldIcon',
  component: LabelPairedCircleEnvelopeSmBoldIcon,
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
} satisfies Meta<typeof LabelPairedCircleEnvelopeSmBoldIcon>;

export default meta;

type Story = StoryObj<typeof LabelPairedCircleEnvelopeSmBoldIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};

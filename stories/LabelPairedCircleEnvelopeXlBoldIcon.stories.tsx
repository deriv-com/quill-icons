import type { Meta, StoryObj } from '@storybook/react';

import { LabelPairedCircleEnvelopeXlBoldIcon } from '../src/react/LabelPaired';

const meta = {
  title: 'label-paired/LabelPairedCircleEnvelopeXlBoldIcon',
  component: LabelPairedCircleEnvelopeXlBoldIcon,
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
} satisfies Meta<typeof LabelPairedCircleEnvelopeXlBoldIcon>;

export default meta;

type Story = StoryObj<typeof LabelPairedCircleEnvelopeXlBoldIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};

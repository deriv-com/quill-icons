import type { Meta, StoryObj } from '@storybook/react';

import { LabelPairedFileInvoiceDollarCaptionRegularIcon } from '../src/react/LabelPaired';

const meta = {
  title: 'label-paired/LabelPairedFileInvoiceDollarCaptionRegularIcon',
  component: LabelPairedFileInvoiceDollarCaptionRegularIcon,
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
} satisfies Meta<typeof LabelPairedFileInvoiceDollarCaptionRegularIcon>;

export default meta;

type Story = StoryObj<typeof LabelPairedFileInvoiceDollarCaptionRegularIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};

import type { Meta, StoryObj } from '@storybook/react';

import { LabelPairedFileInvoiceDollarCaptionBoldIcon } from '../src/react/LabelPaired';

const meta = {
  title: 'label-paired/LabelPairedFileInvoiceDollarCaptionBoldIcon',
  component: LabelPairedFileInvoiceDollarCaptionBoldIcon,
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
} satisfies Meta<typeof LabelPairedFileInvoiceDollarCaptionBoldIcon>;

export default meta;

type Story = StoryObj<typeof LabelPairedFileInvoiceDollarCaptionBoldIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};

import type { Meta, StoryObj } from '@storybook/react';

import { LabelPairedFileInvoiceDollarSmBoldIcon } from '../src/react/LabelPaired';

const meta = {
  title: 'label-paired/LabelPairedFileInvoiceDollarSmBoldIcon',
  component: LabelPairedFileInvoiceDollarSmBoldIcon,
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
} satisfies Meta<typeof LabelPairedFileInvoiceDollarSmBoldIcon>;

export default meta;

type Story = StoryObj<typeof LabelPairedFileInvoiceDollarSmBoldIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};

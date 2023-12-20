import type { Meta, StoryObj } from '@storybook/react';

import { LabelPairedFileInvoiceDollarXlBoldIcon } from '../src/react/LabelPaired';

const meta = {
  title: 'label-paired/LabelPairedFileInvoiceDollarXlBoldIcon',
  component: LabelPairedFileInvoiceDollarXlBoldIcon,
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
} satisfies Meta<typeof LabelPairedFileInvoiceDollarXlBoldIcon>;

export default meta;

type Story = StoryObj<typeof LabelPairedFileInvoiceDollarXlBoldIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};

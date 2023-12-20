import type { Meta, StoryObj } from '@storybook/react';

import { LabelPairedRectangleBarcodeXlRegularIcon } from '../src/react/LabelPaired';

const meta = {
  title: 'label-paired/LabelPairedRectangleBarcodeXlRegularIcon',
  component: LabelPairedRectangleBarcodeXlRegularIcon,
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
} satisfies Meta<typeof LabelPairedRectangleBarcodeXlRegularIcon>;

export default meta;

type Story = StoryObj<typeof LabelPairedRectangleBarcodeXlRegularIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};

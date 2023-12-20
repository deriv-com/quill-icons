import type { Meta, StoryObj } from '@storybook/react';

import { LabelPairedQrcodeLgRegularIcon } from '../src/react/LabelPaired';

const meta = {
  title: 'label-paired/LabelPairedQrcodeLgRegularIcon',
  component: LabelPairedQrcodeLgRegularIcon,
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
} satisfies Meta<typeof LabelPairedQrcodeLgRegularIcon>;

export default meta;

type Story = StoryObj<typeof LabelPairedQrcodeLgRegularIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};

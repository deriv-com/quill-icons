import type { Meta, StoryObj } from '@storybook/react';

import { LabelPairedQrcodeSmRegularIcon } from '../src/react/LabelPaired';

const meta = {
  title: 'label-paired/LabelPairedQrcodeSmRegularIcon',
  component: LabelPairedQrcodeSmRegularIcon,
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
} satisfies Meta<typeof LabelPairedQrcodeSmRegularIcon>;

export default meta;

type Story = StoryObj<typeof LabelPairedQrcodeSmRegularIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};

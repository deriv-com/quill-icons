import type { Meta, StoryObj } from '@storybook/react';

import { LabelPairedQrcodeSmBoldIcon } from '../src/react/LabelPaired';

const meta = {
  title: 'label-paired/LabelPairedQrcodeSmBoldIcon',
  component: LabelPairedQrcodeSmBoldIcon,
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
} satisfies Meta<typeof LabelPairedQrcodeSmBoldIcon>;

export default meta;

type Story = StoryObj<typeof LabelPairedQrcodeSmBoldIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};

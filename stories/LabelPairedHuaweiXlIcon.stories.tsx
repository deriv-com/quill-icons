import type { Meta, StoryObj } from '@storybook/react';

import { LabelPairedHuaweiXlIcon } from '../src/react/LabelPaired';

const meta = {
  title: 'label-paired/LabelPairedHuaweiXlIcon',
  component: LabelPairedHuaweiXlIcon,
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
} satisfies Meta<typeof LabelPairedHuaweiXlIcon>;

export default meta;

type Story = StoryObj<typeof LabelPairedHuaweiXlIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};

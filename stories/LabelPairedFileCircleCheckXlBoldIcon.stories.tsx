import type { Meta, StoryObj } from '@storybook/react';

import { LabelPairedFileCircleCheckXlBoldIcon } from '../src/react/LabelPaired';

const meta = {
  title: 'label-paired/LabelPairedFileCircleCheckXlBoldIcon',
  component: LabelPairedFileCircleCheckXlBoldIcon,
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
} satisfies Meta<typeof LabelPairedFileCircleCheckXlBoldIcon>;

export default meta;

type Story = StoryObj<typeof LabelPairedFileCircleCheckXlBoldIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};

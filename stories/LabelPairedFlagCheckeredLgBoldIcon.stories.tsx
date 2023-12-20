import type { Meta, StoryObj } from '@storybook/react';

import { LabelPairedFlagCheckeredLgBoldIcon } from '../src/react/LabelPaired';

const meta = {
  title: 'label-paired/LabelPairedFlagCheckeredLgBoldIcon',
  component: LabelPairedFlagCheckeredLgBoldIcon,
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
} satisfies Meta<typeof LabelPairedFlagCheckeredLgBoldIcon>;

export default meta;

type Story = StoryObj<typeof LabelPairedFlagCheckeredLgBoldIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};

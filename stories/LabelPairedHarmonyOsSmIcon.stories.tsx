import type { Meta, StoryObj } from '@storybook/react';

import { LabelPairedHarmonyOsSmIcon } from '../src/react/LabelPaired';

const meta = {
  title: 'label-paired/LabelPairedHarmonyOsSmIcon',
  component: LabelPairedHarmonyOsSmIcon,
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
} satisfies Meta<typeof LabelPairedHarmonyOsSmIcon>;

export default meta;

type Story = StoryObj<typeof LabelPairedHarmonyOsSmIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};

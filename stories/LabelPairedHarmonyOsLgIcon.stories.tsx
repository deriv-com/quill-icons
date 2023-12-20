import type { Meta, StoryObj } from '@storybook/react';

import { LabelPairedHarmonyOsLgIcon } from '../src/react/LabelPaired';

const meta = {
  title: 'label-paired/LabelPairedHarmonyOsLgIcon',
  component: LabelPairedHarmonyOsLgIcon,
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
} satisfies Meta<typeof LabelPairedHarmonyOsLgIcon>;

export default meta;

type Story = StoryObj<typeof LabelPairedHarmonyOsLgIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};

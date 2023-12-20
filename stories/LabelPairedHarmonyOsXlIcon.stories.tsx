import type { Meta, StoryObj } from '@storybook/react';

import { LabelPairedHarmonyOsXlIcon } from '../src/react/LabelPaired';

const meta = {
  title: 'label-paired/LabelPairedHarmonyOsXlIcon',
  component: LabelPairedHarmonyOsXlIcon,
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
} satisfies Meta<typeof LabelPairedHarmonyOsXlIcon>;

export default meta;

type Story = StoryObj<typeof LabelPairedHarmonyOsXlIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};

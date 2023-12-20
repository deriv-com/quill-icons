import type { Meta, StoryObj } from '@storybook/react';

import { LabelPairedBarsFilterXlRegularIcon } from '../src/react/LabelPaired';

const meta = {
  title: 'label-paired/LabelPairedBarsFilterXlRegularIcon',
  component: LabelPairedBarsFilterXlRegularIcon,
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
} satisfies Meta<typeof LabelPairedBarsFilterXlRegularIcon>;

export default meta;

type Story = StoryObj<typeof LabelPairedBarsFilterXlRegularIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};

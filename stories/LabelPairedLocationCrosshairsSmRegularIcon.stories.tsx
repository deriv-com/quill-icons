import type { Meta, StoryObj } from '@storybook/react';

import { LabelPairedLocationCrosshairsSmRegularIcon } from '../src/react/LabelPaired';

const meta = {
  title: 'label-paired/LabelPairedLocationCrosshairsSmRegularIcon',
  component: LabelPairedLocationCrosshairsSmRegularIcon,
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
} satisfies Meta<typeof LabelPairedLocationCrosshairsSmRegularIcon>;

export default meta;

type Story = StoryObj<typeof LabelPairedLocationCrosshairsSmRegularIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};

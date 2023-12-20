import type { Meta, StoryObj } from '@storybook/react';

import { LabelPairedPauseXlFillIcon } from '../src/react/LabelPaired';

const meta = {
  title: 'label-paired/LabelPairedPauseXlFillIcon',
  component: LabelPairedPauseXlFillIcon,
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
} satisfies Meta<typeof LabelPairedPauseXlFillIcon>;

export default meta;

type Story = StoryObj<typeof LabelPairedPauseXlFillIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};

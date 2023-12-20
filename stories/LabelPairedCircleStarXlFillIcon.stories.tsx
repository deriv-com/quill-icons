import type { Meta, StoryObj } from '@storybook/react';

import { LabelPairedCircleStarXlFillIcon } from '../src/react/LabelPaired';

const meta = {
  title: 'label-paired/LabelPairedCircleStarXlFillIcon',
  component: LabelPairedCircleStarXlFillIcon,
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
} satisfies Meta<typeof LabelPairedCircleStarXlFillIcon>;

export default meta;

type Story = StoryObj<typeof LabelPairedCircleStarXlFillIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};

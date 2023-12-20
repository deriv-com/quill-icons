import type { Meta, StoryObj } from '@storybook/react';

import { LabelPairedFileCircleCheckXlRegularIcon } from '../src/react/LabelPaired';

const meta = {
  title: 'label-paired/LabelPairedFileCircleCheckXlRegularIcon',
  component: LabelPairedFileCircleCheckXlRegularIcon,
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
} satisfies Meta<typeof LabelPairedFileCircleCheckXlRegularIcon>;

export default meta;

type Story = StoryObj<typeof LabelPairedFileCircleCheckXlRegularIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};

import type { Meta, StoryObj } from '@storybook/react';

import { LabelPairedCircleEllipsisCaptionBoldIcon } from '../src/react/LabelPaired';

const meta = {
  title: 'label-paired/LabelPairedCircleEllipsisCaptionBoldIcon',
  component: LabelPairedCircleEllipsisCaptionBoldIcon,
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
} satisfies Meta<typeof LabelPairedCircleEllipsisCaptionBoldIcon>;

export default meta;

type Story = StoryObj<typeof LabelPairedCircleEllipsisCaptionBoldIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};

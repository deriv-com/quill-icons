import type { Meta, StoryObj } from '@storybook/react';

import { LabelPairedCirclePlusCaptionBoldIcon } from '../src/react/LabelPaired';

const meta = {
  title: 'label-paired/LabelPairedCirclePlusCaptionBoldIcon',
  component: LabelPairedCirclePlusCaptionBoldIcon,
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
} satisfies Meta<typeof LabelPairedCirclePlusCaptionBoldIcon>;

export default meta;

type Story = StoryObj<typeof LabelPairedCirclePlusCaptionBoldIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};

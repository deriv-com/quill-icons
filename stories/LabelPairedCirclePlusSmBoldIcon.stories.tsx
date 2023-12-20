import type { Meta, StoryObj } from '@storybook/react';

import { LabelPairedCirclePlusSmBoldIcon } from '../src/react/LabelPaired';

const meta = {
  title: 'label-paired/LabelPairedCirclePlusSmBoldIcon',
  component: LabelPairedCirclePlusSmBoldIcon,
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
} satisfies Meta<typeof LabelPairedCirclePlusSmBoldIcon>;

export default meta;

type Story = StoryObj<typeof LabelPairedCirclePlusSmBoldIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};

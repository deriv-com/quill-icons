import type { Meta, StoryObj } from '@storybook/react';

import { LabelPairedFlagCheckeredXlBoldIcon } from '../src/react/LabelPaired';

const meta = {
  title: 'label-paired/LabelPairedFlagCheckeredXlBoldIcon',
  component: LabelPairedFlagCheckeredXlBoldIcon,
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
} satisfies Meta<typeof LabelPairedFlagCheckeredXlBoldIcon>;

export default meta;

type Story = StoryObj<typeof LabelPairedFlagCheckeredXlBoldIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};

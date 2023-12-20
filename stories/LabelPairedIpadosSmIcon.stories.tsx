import type { Meta, StoryObj } from '@storybook/react';

import { LabelPairedIpadosSmIcon } from '../src/react/LabelPaired';

const meta = {
  title: 'label-paired/LabelPairedIpadosSmIcon',
  component: LabelPairedIpadosSmIcon,
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
} satisfies Meta<typeof LabelPairedIpadosSmIcon>;

export default meta;

type Story = StoryObj<typeof LabelPairedIpadosSmIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};

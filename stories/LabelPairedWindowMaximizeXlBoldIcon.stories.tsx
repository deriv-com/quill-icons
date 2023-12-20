import type { Meta, StoryObj } from '@storybook/react';

import { LabelPairedWindowMaximizeXlBoldIcon } from '../src/react/LabelPaired';

const meta = {
  title: 'label-paired/LabelPairedWindowMaximizeXlBoldIcon',
  component: LabelPairedWindowMaximizeXlBoldIcon,
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
} satisfies Meta<typeof LabelPairedWindowMaximizeXlBoldIcon>;

export default meta;

type Story = StoryObj<typeof LabelPairedWindowMaximizeXlBoldIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};

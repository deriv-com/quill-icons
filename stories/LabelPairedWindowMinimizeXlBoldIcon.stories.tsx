import type { Meta, StoryObj } from '@storybook/react';

import { LabelPairedWindowMinimizeXlBoldIcon } from '../src/react/LabelPaired';

const meta = {
  title: 'label-paired/LabelPairedWindowMinimizeXlBoldIcon',
  component: LabelPairedWindowMinimizeXlBoldIcon,
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
} satisfies Meta<typeof LabelPairedWindowMinimizeXlBoldIcon>;

export default meta;

type Story = StoryObj<typeof LabelPairedWindowMinimizeXlBoldIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};

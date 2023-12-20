import type { Meta, StoryObj } from '@storybook/react';

import { LabelPairedThreeXlBoldIcon } from '../src/react/LabelPaired';

const meta = {
  title: 'label-paired/LabelPairedThreeXlBoldIcon',
  component: LabelPairedThreeXlBoldIcon,
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
} satisfies Meta<typeof LabelPairedThreeXlBoldIcon>;

export default meta;

type Story = StoryObj<typeof LabelPairedThreeXlBoldIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};

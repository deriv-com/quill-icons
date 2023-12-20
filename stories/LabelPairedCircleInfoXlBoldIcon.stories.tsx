import type { Meta, StoryObj } from '@storybook/react';

import { LabelPairedCircleInfoXlBoldIcon } from '../src/react/LabelPaired';

const meta = {
  title: 'label-paired/LabelPairedCircleInfoXlBoldIcon',
  component: LabelPairedCircleInfoXlBoldIcon,
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
} satisfies Meta<typeof LabelPairedCircleInfoXlBoldIcon>;

export default meta;

type Story = StoryObj<typeof LabelPairedCircleInfoXlBoldIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};

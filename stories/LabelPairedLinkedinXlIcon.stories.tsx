import type { Meta, StoryObj } from '@storybook/react';

import { LabelPairedLinkedinXlIcon } from '../src/react/LabelPaired';

const meta = {
  title: 'label-paired/LabelPairedLinkedinXlIcon',
  component: LabelPairedLinkedinXlIcon,
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
} satisfies Meta<typeof LabelPairedLinkedinXlIcon>;

export default meta;

type Story = StoryObj<typeof LabelPairedLinkedinXlIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};

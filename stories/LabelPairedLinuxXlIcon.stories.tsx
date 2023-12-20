import type { Meta, StoryObj } from '@storybook/react';

import { LabelPairedLinuxXlIcon } from '../src/react/LabelPaired';

const meta = {
  title: 'label-paired/LabelPairedLinuxXlIcon',
  component: LabelPairedLinuxXlIcon,
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
} satisfies Meta<typeof LabelPairedLinuxXlIcon>;

export default meta;

type Story = StoryObj<typeof LabelPairedLinuxXlIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};

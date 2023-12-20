import type { Meta, StoryObj } from '@storybook/react';

import { LabelPairedPhoneLgRegularIcon } from '../src/react/LabelPaired';

const meta = {
  title: 'label-paired/LabelPairedPhoneLgRegularIcon',
  component: LabelPairedPhoneLgRegularIcon,
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
} satisfies Meta<typeof LabelPairedPhoneLgRegularIcon>;

export default meta;

type Story = StoryObj<typeof LabelPairedPhoneLgRegularIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};

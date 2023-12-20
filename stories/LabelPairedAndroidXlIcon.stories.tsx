import type { Meta, StoryObj } from '@storybook/react';

import { LabelPairedAndroidXlIcon } from '../src/react/LabelPaired';

const meta = {
  title: 'label-paired/LabelPairedAndroidXlIcon',
  component: LabelPairedAndroidXlIcon,
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
} satisfies Meta<typeof LabelPairedAndroidXlIcon>;

export default meta;

type Story = StoryObj<typeof LabelPairedAndroidXlIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};

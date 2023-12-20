import type { Meta, StoryObj } from '@storybook/react';

import { LabelPairedCircleXmarkLgRegularIcon } from '../src/react/LabelPaired';

const meta = {
  title: 'label-paired/LabelPairedCircleXmarkLgRegularIcon',
  component: LabelPairedCircleXmarkLgRegularIcon,
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
} satisfies Meta<typeof LabelPairedCircleXmarkLgRegularIcon>;

export default meta;

type Story = StoryObj<typeof LabelPairedCircleXmarkLgRegularIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};

import type { Meta, StoryObj } from '@storybook/react';

import { LabelPairedRectangleAdLgRegularIcon } from '../src/react/LabelPaired';

const meta = {
  title: 'label-paired/LabelPairedRectangleAdLgRegularIcon',
  component: LabelPairedRectangleAdLgRegularIcon,
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
} satisfies Meta<typeof LabelPairedRectangleAdLgRegularIcon>;

export default meta;

type Story = StoryObj<typeof LabelPairedRectangleAdLgRegularIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};

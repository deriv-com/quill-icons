import type { Meta, StoryObj } from '@storybook/react';

import { LabelPairedTriangleExclamationLgRegularIcon } from '../src/react/LabelPaired';

const meta = {
  title: 'label-paired/LabelPairedTriangleExclamationLgRegularIcon',
  component: LabelPairedTriangleExclamationLgRegularIcon,
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
} satisfies Meta<typeof LabelPairedTriangleExclamationLgRegularIcon>;

export default meta;

type Story = StoryObj<typeof LabelPairedTriangleExclamationLgRegularIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};

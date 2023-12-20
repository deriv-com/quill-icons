import type { Meta, StoryObj } from '@storybook/react';

import { LabelPairedCircleExclamationLgRegularIcon } from '../src/react/LabelPaired';

const meta = {
  title: 'label-paired/LabelPairedCircleExclamationLgRegularIcon',
  component: LabelPairedCircleExclamationLgRegularIcon,
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
} satisfies Meta<typeof LabelPairedCircleExclamationLgRegularIcon>;

export default meta;

type Story = StoryObj<typeof LabelPairedCircleExclamationLgRegularIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};

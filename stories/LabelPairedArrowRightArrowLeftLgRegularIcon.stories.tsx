import type { Meta, StoryObj } from '@storybook/react';

import { LabelPairedArrowRightArrowLeftLgRegularIcon } from '../src/react/LabelPaired';

const meta = {
  title: 'label-paired/LabelPairedArrowRightArrowLeftLgRegularIcon',
  component: LabelPairedArrowRightArrowLeftLgRegularIcon,
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
} satisfies Meta<typeof LabelPairedArrowRightArrowLeftLgRegularIcon>;

export default meta;

type Story = StoryObj<typeof LabelPairedArrowRightArrowLeftLgRegularIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};

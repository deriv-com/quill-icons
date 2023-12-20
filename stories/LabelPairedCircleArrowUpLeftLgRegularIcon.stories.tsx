import type { Meta, StoryObj } from '@storybook/react';

import { LabelPairedCircleArrowUpLeftLgRegularIcon } from '../src/react/LabelPaired';

const meta = {
  title: 'label-paired/LabelPairedCircleArrowUpLeftLgRegularIcon',
  component: LabelPairedCircleArrowUpLeftLgRegularIcon,
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
} satisfies Meta<typeof LabelPairedCircleArrowUpLeftLgRegularIcon>;

export default meta;

type Story = StoryObj<typeof LabelPairedCircleArrowUpLeftLgRegularIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};

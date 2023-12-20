import type { Meta, StoryObj } from '@storybook/react';

import { LabelPairedCircleBookmarkLgRegularIcon } from '../src/react/LabelPaired';

const meta = {
  title: 'label-paired/LabelPairedCircleBookmarkLgRegularIcon',
  component: LabelPairedCircleBookmarkLgRegularIcon,
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
} satisfies Meta<typeof LabelPairedCircleBookmarkLgRegularIcon>;

export default meta;

type Story = StoryObj<typeof LabelPairedCircleBookmarkLgRegularIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};

import type { Meta, StoryObj } from '@storybook/react';

import { LabelPairedYoutubeSmIcon } from '../src/react/LabelPaired';

const meta = {
  title: 'label-paired/LabelPairedYoutubeSmIcon',
  component: LabelPairedYoutubeSmIcon,
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
} satisfies Meta<typeof LabelPairedYoutubeSmIcon>;

export default meta;

type Story = StoryObj<typeof LabelPairedYoutubeSmIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};

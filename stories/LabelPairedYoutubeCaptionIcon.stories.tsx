import type { Meta, StoryObj } from '@storybook/react';

import { LabelPairedYoutubeCaptionIcon } from '../src/react/LabelPaired';

const meta = {
  title: 'label-paired/LabelPairedYoutubeCaptionIcon',
  component: LabelPairedYoutubeCaptionIcon,
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
} satisfies Meta<typeof LabelPairedYoutubeCaptionIcon>;

export default meta;

type Story = StoryObj<typeof LabelPairedYoutubeCaptionIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};

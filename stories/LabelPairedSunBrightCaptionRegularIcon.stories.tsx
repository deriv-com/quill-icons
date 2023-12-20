import type { Meta, StoryObj } from '@storybook/react';

import { LabelPairedSunBrightCaptionRegularIcon } from '../src/react/LabelPaired';

const meta = {
  title: 'label-paired/LabelPairedSunBrightCaptionRegularIcon',
  component: LabelPairedSunBrightCaptionRegularIcon,
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
} satisfies Meta<typeof LabelPairedSunBrightCaptionRegularIcon>;

export default meta;

type Story = StoryObj<typeof LabelPairedSunBrightCaptionRegularIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};

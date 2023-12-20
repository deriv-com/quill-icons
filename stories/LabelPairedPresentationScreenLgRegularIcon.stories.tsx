import type { Meta, StoryObj } from '@storybook/react';

import { LabelPairedPresentationScreenLgRegularIcon } from '../src/react/LabelPaired';

const meta = {
  title: 'label-paired/LabelPairedPresentationScreenLgRegularIcon',
  component: LabelPairedPresentationScreenLgRegularIcon,
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
} satisfies Meta<typeof LabelPairedPresentationScreenLgRegularIcon>;

export default meta;

type Story = StoryObj<typeof LabelPairedPresentationScreenLgRegularIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};

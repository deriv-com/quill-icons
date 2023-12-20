import type { Meta, StoryObj } from '@storybook/react';

import { LabelPairedPresentationScreenSmBoldIcon } from '../src/react/LabelPaired';

const meta = {
  title: 'label-paired/LabelPairedPresentationScreenSmBoldIcon',
  component: LabelPairedPresentationScreenSmBoldIcon,
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
} satisfies Meta<typeof LabelPairedPresentationScreenSmBoldIcon>;

export default meta;

type Story = StoryObj<typeof LabelPairedPresentationScreenSmBoldIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};

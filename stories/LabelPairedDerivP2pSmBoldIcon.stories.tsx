import type { Meta, StoryObj } from '@storybook/react';

import { LabelPairedDerivP2pSmBoldIcon } from '../src/react/LabelPaired';

const meta = {
  title: 'label-paired/LabelPairedDerivP2pSmBoldIcon',
  component: LabelPairedDerivP2pSmBoldIcon,
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
} satisfies Meta<typeof LabelPairedDerivP2pSmBoldIcon>;

export default meta;

type Story = StoryObj<typeof LabelPairedDerivP2pSmBoldIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};

import type { Meta, StoryObj } from '@storybook/react';

import { LabelPairedDerivP2pSmRegularIcon } from '../src/react/LabelPaired';

const meta = {
  title: 'label-paired/LabelPairedDerivP2pSmRegularIcon',
  component: LabelPairedDerivP2pSmRegularIcon,
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
} satisfies Meta<typeof LabelPairedDerivP2pSmRegularIcon>;

export default meta;

type Story = StoryObj<typeof LabelPairedDerivP2pSmRegularIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};

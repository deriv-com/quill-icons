import type { Meta, StoryObj } from '@storybook/react';

import { LabelPairedDerivSmIcon } from '../src/react/LabelPaired';

const meta = {
  title: 'label-paired/LabelPairedDerivSmIcon',
  component: LabelPairedDerivSmIcon,
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
} satisfies Meta<typeof LabelPairedDerivSmIcon>;

export default meta;

type Story = StoryObj<typeof LabelPairedDerivSmIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};

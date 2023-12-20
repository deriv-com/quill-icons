import type { Meta, StoryObj } from '@storybook/react';

import { LabelPairedDerivLgIcon } from '../src/react/LabelPaired';

const meta = {
  title: 'label-paired/LabelPairedDerivLgIcon',
  component: LabelPairedDerivLgIcon,
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
} satisfies Meta<typeof LabelPairedDerivLgIcon>;

export default meta;

type Story = StoryObj<typeof LabelPairedDerivLgIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};

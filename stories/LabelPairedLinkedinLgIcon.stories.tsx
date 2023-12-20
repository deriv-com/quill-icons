import type { Meta, StoryObj } from '@storybook/react';

import { LabelPairedLinkedinLgIcon } from '../src/react/LabelPaired';

const meta = {
  title: 'label-paired/LabelPairedLinkedinLgIcon',
  component: LabelPairedLinkedinLgIcon,
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
} satisfies Meta<typeof LabelPairedLinkedinLgIcon>;

export default meta;

type Story = StoryObj<typeof LabelPairedLinkedinLgIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};

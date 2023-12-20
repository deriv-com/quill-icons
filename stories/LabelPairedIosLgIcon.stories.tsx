import type { Meta, StoryObj } from '@storybook/react';

import { LabelPairedIosLgIcon } from '../src/react/LabelPaired';

const meta = {
  title: 'label-paired/LabelPairedIosLgIcon',
  component: LabelPairedIosLgIcon,
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
} satisfies Meta<typeof LabelPairedIosLgIcon>;

export default meta;

type Story = StoryObj<typeof LabelPairedIosLgIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};

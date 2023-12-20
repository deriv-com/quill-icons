import type { Meta, StoryObj } from '@storybook/react';

import { LabelPairedIpadosLgIcon } from '../src/react/LabelPaired';

const meta = {
  title: 'label-paired/LabelPairedIpadosLgIcon',
  component: LabelPairedIpadosLgIcon,
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
} satisfies Meta<typeof LabelPairedIpadosLgIcon>;

export default meta;

type Story = StoryObj<typeof LabelPairedIpadosLgIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};

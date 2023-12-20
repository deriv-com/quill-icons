import type { Meta, StoryObj } from '@storybook/react';

import { LabelPairedAppStoreLgIcon } from '../src/react/LabelPaired';

const meta = {
  title: 'label-paired/LabelPairedAppStoreLgIcon',
  component: LabelPairedAppStoreLgIcon,
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
} satisfies Meta<typeof LabelPairedAppStoreLgIcon>;

export default meta;

type Story = StoryObj<typeof LabelPairedAppStoreLgIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};

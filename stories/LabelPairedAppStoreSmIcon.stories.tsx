import type { Meta, StoryObj } from '@storybook/react';

import { LabelPairedAppStoreSmIcon } from '../src/react/LabelPaired';

const meta = {
  title: 'label-paired/LabelPairedAppStoreSmIcon',
  component: LabelPairedAppStoreSmIcon,
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
} satisfies Meta<typeof LabelPairedAppStoreSmIcon>;

export default meta;

type Story = StoryObj<typeof LabelPairedAppStoreSmIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};

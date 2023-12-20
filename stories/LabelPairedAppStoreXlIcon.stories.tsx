import type { Meta, StoryObj } from '@storybook/react';

import { LabelPairedAppStoreXlIcon } from '../src/react/LabelPaired';

const meta = {
  title: 'label-paired/LabelPairedAppStoreXlIcon',
  component: LabelPairedAppStoreXlIcon,
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
} satisfies Meta<typeof LabelPairedAppStoreXlIcon>;

export default meta;

type Story = StoryObj<typeof LabelPairedAppStoreXlIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};

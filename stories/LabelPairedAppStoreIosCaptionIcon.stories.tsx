import type { Meta, StoryObj } from '@storybook/react';

import { LabelPairedAppStoreIosCaptionIcon } from '../src/react/LabelPaired';

const meta = {
  title: 'label-paired/LabelPairedAppStoreIosCaptionIcon',
  component: LabelPairedAppStoreIosCaptionIcon,
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
} satisfies Meta<typeof LabelPairedAppStoreIosCaptionIcon>;

export default meta;

type Story = StoryObj<typeof LabelPairedAppStoreIosCaptionIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};

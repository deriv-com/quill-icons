import type { Meta, StoryObj } from '@storybook/react';

import { LabelPairedFiatOnrampLgBoldIcon } from '../src/react/LabelPaired';

const meta = {
  title: 'label-paired/LabelPairedFiatOnrampLgBoldIcon',
  component: LabelPairedFiatOnrampLgBoldIcon,
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
} satisfies Meta<typeof LabelPairedFiatOnrampLgBoldIcon>;

export default meta;

type Story = StoryObj<typeof LabelPairedFiatOnrampLgBoldIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};

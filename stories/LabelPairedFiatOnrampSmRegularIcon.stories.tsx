import type { Meta, StoryObj } from '@storybook/react';

import { LabelPairedFiatOnrampSmRegularIcon } from '../src/react/LabelPaired';

const meta = {
  title: 'label-paired/LabelPairedFiatOnrampSmRegularIcon',
  component: LabelPairedFiatOnrampSmRegularIcon,
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
} satisfies Meta<typeof LabelPairedFiatOnrampSmRegularIcon>;

export default meta;

type Story = StoryObj<typeof LabelPairedFiatOnrampSmRegularIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};

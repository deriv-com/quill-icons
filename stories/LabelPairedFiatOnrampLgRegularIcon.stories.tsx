import type { Meta, StoryObj } from '@storybook/react';

import { LabelPairedFiatOnrampLgRegularIcon } from '../src/react/LabelPaired';

const meta = {
  title: 'label-paired/LabelPairedFiatOnrampLgRegularIcon',
  component: LabelPairedFiatOnrampLgRegularIcon,
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
} satisfies Meta<typeof LabelPairedFiatOnrampLgRegularIcon>;

export default meta;

type Story = StoryObj<typeof LabelPairedFiatOnrampLgRegularIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};

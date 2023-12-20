import type { Meta, StoryObj } from '@storybook/react';

import { LabelPairedGaugeMinLgRegularIcon } from '../src/react/LabelPaired';

const meta = {
  title: 'label-paired/LabelPairedGaugeMinLgRegularIcon',
  component: LabelPairedGaugeMinLgRegularIcon,
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
} satisfies Meta<typeof LabelPairedGaugeMinLgRegularIcon>;

export default meta;

type Story = StoryObj<typeof LabelPairedGaugeMinLgRegularIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};

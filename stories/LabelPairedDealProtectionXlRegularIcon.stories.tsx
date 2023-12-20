import type { Meta, StoryObj } from '@storybook/react';

import { LabelPairedDealProtectionXlRegularIcon } from '../src/react/LabelPaired';

const meta = {
  title: 'label-paired/LabelPairedDealProtectionXlRegularIcon',
  component: LabelPairedDealProtectionXlRegularIcon,
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
} satisfies Meta<typeof LabelPairedDealProtectionXlRegularIcon>;

export default meta;

type Story = StoryObj<typeof LabelPairedDealProtectionXlRegularIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};

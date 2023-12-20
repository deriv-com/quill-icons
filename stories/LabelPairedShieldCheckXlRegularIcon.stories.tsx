import type { Meta, StoryObj } from '@storybook/react';

import { LabelPairedShieldCheckXlRegularIcon } from '../src/react/LabelPaired';

const meta = {
  title: 'label-paired/LabelPairedShieldCheckXlRegularIcon',
  component: LabelPairedShieldCheckXlRegularIcon,
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
} satisfies Meta<typeof LabelPairedShieldCheckXlRegularIcon>;

export default meta;

type Story = StoryObj<typeof LabelPairedShieldCheckXlRegularIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};

import type { Meta, StoryObj } from '@storybook/react';

import { LabelPairedFlagCheckeredLgRegularIcon } from '../src/react/LabelPaired';

const meta = {
  title: 'label-paired/LabelPairedFlagCheckeredLgRegularIcon',
  component: LabelPairedFlagCheckeredLgRegularIcon,
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
} satisfies Meta<typeof LabelPairedFlagCheckeredLgRegularIcon>;

export default meta;

type Story = StoryObj<typeof LabelPairedFlagCheckeredLgRegularIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};

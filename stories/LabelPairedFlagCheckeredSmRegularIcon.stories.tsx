import type { Meta, StoryObj } from '@storybook/react';

import { LabelPairedFlagCheckeredSmRegularIcon } from '../src/react/LabelPaired';

const meta = {
  title: 'label-paired/LabelPairedFlagCheckeredSmRegularIcon',
  component: LabelPairedFlagCheckeredSmRegularIcon,
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
} satisfies Meta<typeof LabelPairedFlagCheckeredSmRegularIcon>;

export default meta;

type Story = StoryObj<typeof LabelPairedFlagCheckeredSmRegularIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};

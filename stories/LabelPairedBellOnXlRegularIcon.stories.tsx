import type { Meta, StoryObj } from '@storybook/react';

import { LabelPairedBellOnXlRegularIcon } from '../src/react/LabelPaired';

const meta = {
  title: 'label-paired/LabelPairedBellOnXlRegularIcon',
  component: LabelPairedBellOnXlRegularIcon,
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
} satisfies Meta<typeof LabelPairedBellOnXlRegularIcon>;

export default meta;

type Story = StoryObj<typeof LabelPairedBellOnXlRegularIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};

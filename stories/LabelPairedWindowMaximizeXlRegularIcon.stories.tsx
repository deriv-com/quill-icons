import type { Meta, StoryObj } from '@storybook/react';

import { LabelPairedWindowMaximizeXlRegularIcon } from '../src/react/LabelPaired';

const meta = {
  title: 'label-paired/LabelPairedWindowMaximizeXlRegularIcon',
  component: LabelPairedWindowMaximizeXlRegularIcon,
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
} satisfies Meta<typeof LabelPairedWindowMaximizeXlRegularIcon>;

export default meta;

type Story = StoryObj<typeof LabelPairedWindowMaximizeXlRegularIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};

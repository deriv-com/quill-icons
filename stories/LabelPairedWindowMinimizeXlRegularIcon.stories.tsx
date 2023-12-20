import type { Meta, StoryObj } from '@storybook/react';

import { LabelPairedWindowMinimizeXlRegularIcon } from '../src/react/LabelPaired';

const meta = {
  title: 'label-paired/LabelPairedWindowMinimizeXlRegularIcon',
  component: LabelPairedWindowMinimizeXlRegularIcon,
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
} satisfies Meta<typeof LabelPairedWindowMinimizeXlRegularIcon>;

export default meta;

type Story = StoryObj<typeof LabelPairedWindowMinimizeXlRegularIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};

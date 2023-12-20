import type { Meta, StoryObj } from '@storybook/react';

import { LabelPairedCirclePlusXlRegularIcon } from '../src/react/LabelPaired';

const meta = {
  title: 'label-paired/LabelPairedCirclePlusXlRegularIcon',
  component: LabelPairedCirclePlusXlRegularIcon,
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
} satisfies Meta<typeof LabelPairedCirclePlusXlRegularIcon>;

export default meta;

type Story = StoryObj<typeof LabelPairedCirclePlusXlRegularIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};

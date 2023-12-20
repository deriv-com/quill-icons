import type { Meta, StoryObj } from '@storybook/react';

import { LabelPairedCircleChevronLeftXlRegularIcon } from '../src/react/LabelPaired';

const meta = {
  title: 'label-paired/LabelPairedCircleChevronLeftXlRegularIcon',
  component: LabelPairedCircleChevronLeftXlRegularIcon,
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
} satisfies Meta<typeof LabelPairedCircleChevronLeftXlRegularIcon>;

export default meta;

type Story = StoryObj<typeof LabelPairedCircleChevronLeftXlRegularIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};

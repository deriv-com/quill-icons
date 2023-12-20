import type { Meta, StoryObj } from '@storybook/react';

import { LabelPairedRectangleAdXlRegularIcon } from '../src/react/LabelPaired';

const meta = {
  title: 'label-paired/LabelPairedRectangleAdXlRegularIcon',
  component: LabelPairedRectangleAdXlRegularIcon,
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
} satisfies Meta<typeof LabelPairedRectangleAdXlRegularIcon>;

export default meta;

type Story = StoryObj<typeof LabelPairedRectangleAdXlRegularIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};

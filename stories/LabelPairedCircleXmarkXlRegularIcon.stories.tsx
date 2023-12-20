import type { Meta, StoryObj } from '@storybook/react';

import { LabelPairedCircleXmarkXlRegularIcon } from '../src/react/LabelPaired';

const meta = {
  title: 'label-paired/LabelPairedCircleXmarkXlRegularIcon',
  component: LabelPairedCircleXmarkXlRegularIcon,
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
} satisfies Meta<typeof LabelPairedCircleXmarkXlRegularIcon>;

export default meta;

type Story = StoryObj<typeof LabelPairedCircleXmarkXlRegularIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};

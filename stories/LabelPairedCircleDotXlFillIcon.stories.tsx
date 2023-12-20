import type { Meta, StoryObj } from '@storybook/react';

import { LabelPairedCircleDotXlFillIcon } from '../src/react/LabelPaired';

const meta = {
  title: 'label-paired/LabelPairedCircleDotXlFillIcon',
  component: LabelPairedCircleDotXlFillIcon,
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
} satisfies Meta<typeof LabelPairedCircleDotXlFillIcon>;

export default meta;

type Story = StoryObj<typeof LabelPairedCircleDotXlFillIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};

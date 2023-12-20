import type { Meta, StoryObj } from '@storybook/react';

import { LabelPairedIosXlIcon } from '../src/react/LabelPaired';

const meta = {
  title: 'label-paired/LabelPairedIosXlIcon',
  component: LabelPairedIosXlIcon,
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
} satisfies Meta<typeof LabelPairedIosXlIcon>;

export default meta;

type Story = StoryObj<typeof LabelPairedIosXlIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};

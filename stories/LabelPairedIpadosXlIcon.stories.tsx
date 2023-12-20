import type { Meta, StoryObj } from '@storybook/react';

import { LabelPairedIpadosXlIcon } from '../src/react/LabelPaired';

const meta = {
  title: 'label-paired/LabelPairedIpadosXlIcon',
  component: LabelPairedIpadosXlIcon,
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
} satisfies Meta<typeof LabelPairedIpadosXlIcon>;

export default meta;

type Story = StoryObj<typeof LabelPairedIpadosXlIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};

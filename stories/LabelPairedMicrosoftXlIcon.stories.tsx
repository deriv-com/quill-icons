import type { Meta, StoryObj } from '@storybook/react';

import { LabelPairedMicrosoftXlIcon } from '../src/react/LabelPaired';

const meta = {
  title: 'label-paired/LabelPairedMicrosoftXlIcon',
  component: LabelPairedMicrosoftXlIcon,
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
} satisfies Meta<typeof LabelPairedMicrosoftXlIcon>;

export default meta;

type Story = StoryObj<typeof LabelPairedMicrosoftXlIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};

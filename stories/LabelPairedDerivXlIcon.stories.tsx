import type { Meta, StoryObj } from '@storybook/react';

import { LabelPairedDerivXlIcon } from '../src/react/LabelPaired';

const meta = {
  title: 'label-paired/LabelPairedDerivXlIcon',
  component: LabelPairedDerivXlIcon,
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
} satisfies Meta<typeof LabelPairedDerivXlIcon>;

export default meta;

type Story = StoryObj<typeof LabelPairedDerivXlIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};

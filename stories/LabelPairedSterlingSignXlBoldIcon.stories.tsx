import type { Meta, StoryObj } from '@storybook/react';

import { LabelPairedSterlingSignXlBoldIcon } from '../src/react/LabelPaired';

const meta = {
  title: 'label-paired/LabelPairedSterlingSignXlBoldIcon',
  component: LabelPairedSterlingSignXlBoldIcon,
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
} satisfies Meta<typeof LabelPairedSterlingSignXlBoldIcon>;

export default meta;

type Story = StoryObj<typeof LabelPairedSterlingSignXlBoldIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};

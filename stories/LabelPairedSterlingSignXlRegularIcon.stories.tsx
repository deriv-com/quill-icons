import type { Meta, StoryObj } from '@storybook/react';

import { LabelPairedSterlingSignXlRegularIcon } from '../src/react/LabelPaired';

const meta = {
  title: 'label-paired/LabelPairedSterlingSignXlRegularIcon',
  component: LabelPairedSterlingSignXlRegularIcon,
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
} satisfies Meta<typeof LabelPairedSterlingSignXlRegularIcon>;

export default meta;

type Story = StoryObj<typeof LabelPairedSterlingSignXlRegularIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};

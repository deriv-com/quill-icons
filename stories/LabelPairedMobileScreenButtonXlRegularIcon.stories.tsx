import type { Meta, StoryObj } from '@storybook/react';

import { LabelPairedMobileScreenButtonXlRegularIcon } from '../src/react/LabelPaired';

const meta = {
  title: 'label-paired/LabelPairedMobileScreenButtonXlRegularIcon',
  component: LabelPairedMobileScreenButtonXlRegularIcon,
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
} satisfies Meta<typeof LabelPairedMobileScreenButtonXlRegularIcon>;

export default meta;

type Story = StoryObj<typeof LabelPairedMobileScreenButtonXlRegularIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};

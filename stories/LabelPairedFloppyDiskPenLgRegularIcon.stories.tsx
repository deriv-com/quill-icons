import type { Meta, StoryObj } from '@storybook/react';

import { LabelPairedFloppyDiskPenLgRegularIcon } from '../src/react/LabelPaired';

const meta = {
  title: 'label-paired/LabelPairedFloppyDiskPenLgRegularIcon',
  component: LabelPairedFloppyDiskPenLgRegularIcon,
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
} satisfies Meta<typeof LabelPairedFloppyDiskPenLgRegularIcon>;

export default meta;

type Story = StoryObj<typeof LabelPairedFloppyDiskPenLgRegularIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};

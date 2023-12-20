import type { Meta, StoryObj } from '@storybook/react';

import { LabelPairedFloppyDiskPenXlRegularIcon } from '../src/react/LabelPaired';

const meta = {
  title: 'label-paired/LabelPairedFloppyDiskPenXlRegularIcon',
  component: LabelPairedFloppyDiskPenXlRegularIcon,
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
} satisfies Meta<typeof LabelPairedFloppyDiskPenXlRegularIcon>;

export default meta;

type Story = StoryObj<typeof LabelPairedFloppyDiskPenXlRegularIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};

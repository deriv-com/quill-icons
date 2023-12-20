import type { Meta, StoryObj } from '@storybook/react';

import { LabelPairedHuaweiAppGallerySmIcon } from '../src/react/LabelPaired';

const meta = {
  title: 'label-paired/LabelPairedHuaweiAppGallerySmIcon',
  component: LabelPairedHuaweiAppGallerySmIcon,
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
} satisfies Meta<typeof LabelPairedHuaweiAppGallerySmIcon>;

export default meta;

type Story = StoryObj<typeof LabelPairedHuaweiAppGallerySmIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};

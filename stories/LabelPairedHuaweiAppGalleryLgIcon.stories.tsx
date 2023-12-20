import type { Meta, StoryObj } from '@storybook/react';

import { LabelPairedHuaweiAppGalleryLgIcon } from '../src/react/LabelPaired';

const meta = {
  title: 'label-paired/LabelPairedHuaweiAppGalleryLgIcon',
  component: LabelPairedHuaweiAppGalleryLgIcon,
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
} satisfies Meta<typeof LabelPairedHuaweiAppGalleryLgIcon>;

export default meta;

type Story = StoryObj<typeof LabelPairedHuaweiAppGalleryLgIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};

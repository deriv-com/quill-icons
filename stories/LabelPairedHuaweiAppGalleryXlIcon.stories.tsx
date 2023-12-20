import type { Meta, StoryObj } from '@storybook/react';

import { LabelPairedHuaweiAppGalleryXlIcon } from '../src/react/LabelPaired';

const meta = {
  title: 'label-paired/LabelPairedHuaweiAppGalleryXlIcon',
  component: LabelPairedHuaweiAppGalleryXlIcon,
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
} satisfies Meta<typeof LabelPairedHuaweiAppGalleryXlIcon>;

export default meta;

type Story = StoryObj<typeof LabelPairedHuaweiAppGalleryXlIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};

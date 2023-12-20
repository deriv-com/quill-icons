import type { Meta, StoryObj } from '@storybook/react';

import { LabelPairedHuaweiAppGalleryCaptionIcon } from '../src/react/LabelPaired';

const meta = {
  title: 'label-paired/LabelPairedHuaweiAppGalleryCaptionIcon',
  component: LabelPairedHuaweiAppGalleryCaptionIcon,
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
} satisfies Meta<typeof LabelPairedHuaweiAppGalleryCaptionIcon>;

export default meta;

type Story = StoryObj<typeof LabelPairedHuaweiAppGalleryCaptionIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};

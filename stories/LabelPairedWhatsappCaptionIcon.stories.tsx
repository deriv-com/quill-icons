import type { Meta, StoryObj } from '@storybook/react';

import { LabelPairedWhatsappCaptionIcon } from '../src/react/LabelPaired';

const meta = {
  title: 'label-paired/LabelPairedWhatsappCaptionIcon',
  component: LabelPairedWhatsappCaptionIcon,
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
} satisfies Meta<typeof LabelPairedWhatsappCaptionIcon>;

export default meta;

type Story = StoryObj<typeof LabelPairedWhatsappCaptionIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};

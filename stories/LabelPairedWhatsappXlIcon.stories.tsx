import type { Meta, StoryObj } from '@storybook/react';

import { LabelPairedWhatsappXlIcon } from '../src/react/LabelPaired';

const meta = {
  title: 'label-paired/LabelPairedWhatsappXlIcon',
  component: LabelPairedWhatsappXlIcon,
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
} satisfies Meta<typeof LabelPairedWhatsappXlIcon>;

export default meta;

type Story = StoryObj<typeof LabelPairedWhatsappXlIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};

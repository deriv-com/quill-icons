import type { Meta, StoryObj } from '@storybook/react';

import { LabelPairedImagePolaroidUserXlBoldIcon } from '../src/react/LabelPaired';

const meta = {
  title: 'label-paired/LabelPairedImagePolaroidUserXlBoldIcon',
  component: LabelPairedImagePolaroidUserXlBoldIcon,
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
} satisfies Meta<typeof LabelPairedImagePolaroidUserXlBoldIcon>;

export default meta;

type Story = StoryObj<typeof LabelPairedImagePolaroidUserXlBoldIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};

import type { Meta, StoryObj } from '@storybook/react';

import { LabelPairedImagePolaroidUserSmBoldIcon } from '../src/react/LabelPaired';

const meta = {
  title: 'label-paired/LabelPairedImagePolaroidUserSmBoldIcon',
  component: LabelPairedImagePolaroidUserSmBoldIcon,
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
} satisfies Meta<typeof LabelPairedImagePolaroidUserSmBoldIcon>;

export default meta;

type Story = StoryObj<typeof LabelPairedImagePolaroidUserSmBoldIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};

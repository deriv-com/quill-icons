import type { Meta, StoryObj } from '@storybook/react';

import { LabelPairedPresentationScreenXlBoldIcon } from '../src/react/LabelPaired';

const meta = {
  title: 'label-paired/LabelPairedPresentationScreenXlBoldIcon',
  component: LabelPairedPresentationScreenXlBoldIcon,
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
} satisfies Meta<typeof LabelPairedPresentationScreenXlBoldIcon>;

export default meta;

type Story = StoryObj<typeof LabelPairedPresentationScreenXlBoldIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};

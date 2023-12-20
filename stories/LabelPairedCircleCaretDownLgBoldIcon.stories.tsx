import type { Meta, StoryObj } from '@storybook/react';

import { LabelPairedCircleCaretDownLgBoldIcon } from '../src/react/LabelPaired';

const meta = {
  title: 'label-paired/LabelPairedCircleCaretDownLgBoldIcon',
  component: LabelPairedCircleCaretDownLgBoldIcon,
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
} satisfies Meta<typeof LabelPairedCircleCaretDownLgBoldIcon>;

export default meta;

type Story = StoryObj<typeof LabelPairedCircleCaretDownLgBoldIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};

import type { Meta, StoryObj } from '@storybook/react';

import { LabelPairedCircleCaretDownCaptionBoldIcon } from '../src/react/LabelPaired';

const meta = {
  title: 'label-paired/LabelPairedCircleCaretDownCaptionBoldIcon',
  component: LabelPairedCircleCaretDownCaptionBoldIcon,
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
} satisfies Meta<typeof LabelPairedCircleCaretDownCaptionBoldIcon>;

export default meta;

type Story = StoryObj<typeof LabelPairedCircleCaretDownCaptionBoldIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};

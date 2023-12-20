import type { Meta, StoryObj } from '@storybook/react';

import { LabelPairedCircleSterlingCaptionBoldIcon } from '../src/react/LabelPaired';

const meta = {
  title: 'label-paired/LabelPairedCircleSterlingCaptionBoldIcon',
  component: LabelPairedCircleSterlingCaptionBoldIcon,
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
} satisfies Meta<typeof LabelPairedCircleSterlingCaptionBoldIcon>;

export default meta;

type Story = StoryObj<typeof LabelPairedCircleSterlingCaptionBoldIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};

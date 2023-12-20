import type { Meta, StoryObj } from '@storybook/react';

import { LabelPairedCircleSterlingSmBoldIcon } from '../src/react/LabelPaired';

const meta = {
  title: 'label-paired/LabelPairedCircleSterlingSmBoldIcon',
  component: LabelPairedCircleSterlingSmBoldIcon,
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
} satisfies Meta<typeof LabelPairedCircleSterlingSmBoldIcon>;

export default meta;

type Story = StoryObj<typeof LabelPairedCircleSterlingSmBoldIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};

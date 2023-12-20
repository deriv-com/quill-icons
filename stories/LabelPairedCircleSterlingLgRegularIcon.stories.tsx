import type { Meta, StoryObj } from '@storybook/react';

import { LabelPairedCircleSterlingLgRegularIcon } from '../src/react/LabelPaired';

const meta = {
  title: 'label-paired/LabelPairedCircleSterlingLgRegularIcon',
  component: LabelPairedCircleSterlingLgRegularIcon,
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
} satisfies Meta<typeof LabelPairedCircleSterlingLgRegularIcon>;

export default meta;

type Story = StoryObj<typeof LabelPairedCircleSterlingLgRegularIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};

import type { Meta, StoryObj } from '@storybook/react';

import { LabelPairedPersonChalkboardLgBoldIcon } from '../src/react/LabelPaired';

const meta = {
  title: 'label-paired/LabelPairedPersonChalkboardLgBoldIcon',
  component: LabelPairedPersonChalkboardLgBoldIcon,
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
} satisfies Meta<typeof LabelPairedPersonChalkboardLgBoldIcon>;

export default meta;

type Story = StoryObj<typeof LabelPairedPersonChalkboardLgBoldIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};

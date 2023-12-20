import type { Meta, StoryObj } from '@storybook/react';

import { LabelPairedInstagramSmIcon } from '../src/react/LabelPaired';

const meta = {
  title: 'label-paired/LabelPairedInstagramSmIcon',
  component: LabelPairedInstagramSmIcon,
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
} satisfies Meta<typeof LabelPairedInstagramSmIcon>;

export default meta;

type Story = StoryObj<typeof LabelPairedInstagramSmIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};

import type { Meta, StoryObj } from '@storybook/react';

import { LabelPairedPersonChalkboardSmRegularIcon } from '../src/react/LabelPaired';

const meta = {
  title: 'label-paired/LabelPairedPersonChalkboardSmRegularIcon',
  component: LabelPairedPersonChalkboardSmRegularIcon,
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
} satisfies Meta<typeof LabelPairedPersonChalkboardSmRegularIcon>;

export default meta;

type Story = StoryObj<typeof LabelPairedPersonChalkboardSmRegularIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};

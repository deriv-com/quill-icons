import type { Meta, StoryObj } from '@storybook/react';

import { LabelPairedPersonChalkboardXlRegularIcon } from '../src/react/LabelPaired';

const meta = {
  title: 'label-paired/LabelPairedPersonChalkboardXlRegularIcon',
  component: LabelPairedPersonChalkboardXlRegularIcon,
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
} satisfies Meta<typeof LabelPairedPersonChalkboardXlRegularIcon>;

export default meta;

type Story = StoryObj<typeof LabelPairedPersonChalkboardXlRegularIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};

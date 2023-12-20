import type { Meta, StoryObj } from '@storybook/react';

import { LabelPairedPersonChalkboardLgRegularIcon } from '../src/react/LabelPaired';

const meta = {
  title: 'label-paired/LabelPairedPersonChalkboardLgRegularIcon',
  component: LabelPairedPersonChalkboardLgRegularIcon,
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
} satisfies Meta<typeof LabelPairedPersonChalkboardLgRegularIcon>;

export default meta;

type Story = StoryObj<typeof LabelPairedPersonChalkboardLgRegularIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};

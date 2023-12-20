import type { Meta, StoryObj } from '@storybook/react';

import { LabelPairedUbuntuXlIcon } from '../src/react/LabelPaired';

const meta = {
  title: 'label-paired/LabelPairedUbuntuXlIcon',
  component: LabelPairedUbuntuXlIcon,
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
} satisfies Meta<typeof LabelPairedUbuntuXlIcon>;

export default meta;

type Story = StoryObj<typeof LabelPairedUbuntuXlIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};

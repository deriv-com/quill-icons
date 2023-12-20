import type { Meta, StoryObj } from '@storybook/react';

import { LabelPairedGooglePlayXlIcon } from '../src/react/LabelPaired';

const meta = {
  title: 'label-paired/LabelPairedGooglePlayXlIcon',
  component: LabelPairedGooglePlayXlIcon,
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
} satisfies Meta<typeof LabelPairedGooglePlayXlIcon>;

export default meta;

type Story = StoryObj<typeof LabelPairedGooglePlayXlIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};

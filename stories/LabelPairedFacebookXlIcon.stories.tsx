import type { Meta, StoryObj } from '@storybook/react';

import { LabelPairedFacebookXlIcon } from '../src/react/LabelPaired';

const meta = {
  title: 'label-paired/LabelPairedFacebookXlIcon',
  component: LabelPairedFacebookXlIcon,
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
} satisfies Meta<typeof LabelPairedFacebookXlIcon>;

export default meta;

type Story = StoryObj<typeof LabelPairedFacebookXlIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};

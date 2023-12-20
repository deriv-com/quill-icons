import type { Meta, StoryObj } from '@storybook/react';

import { LabelPairedTableLayoutLgRegularIcon } from '../src/react/LabelPaired';

const meta = {
  title: 'label-paired/LabelPairedTableLayoutLgRegularIcon',
  component: LabelPairedTableLayoutLgRegularIcon,
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
} satisfies Meta<typeof LabelPairedTableLayoutLgRegularIcon>;

export default meta;

type Story = StoryObj<typeof LabelPairedTableLayoutLgRegularIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};

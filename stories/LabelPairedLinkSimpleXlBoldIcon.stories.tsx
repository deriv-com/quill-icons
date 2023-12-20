import type { Meta, StoryObj } from '@storybook/react';

import { LabelPairedLinkSimpleXlBoldIcon } from '../src/react/LabelPaired';

const meta = {
  title: 'label-paired/LabelPairedLinkSimpleXlBoldIcon',
  component: LabelPairedLinkSimpleXlBoldIcon,
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
} satisfies Meta<typeof LabelPairedLinkSimpleXlBoldIcon>;

export default meta;

type Story = StoryObj<typeof LabelPairedLinkSimpleXlBoldIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};

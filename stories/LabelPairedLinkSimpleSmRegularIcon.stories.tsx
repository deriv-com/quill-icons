import type { Meta, StoryObj } from '@storybook/react';

import { LabelPairedLinkSimpleSmRegularIcon } from '../src/react/LabelPaired';

const meta = {
  title: 'label-paired/LabelPairedLinkSimpleSmRegularIcon',
  component: LabelPairedLinkSimpleSmRegularIcon,
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
} satisfies Meta<typeof LabelPairedLinkSimpleSmRegularIcon>;

export default meta;

type Story = StoryObj<typeof LabelPairedLinkSimpleSmRegularIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};

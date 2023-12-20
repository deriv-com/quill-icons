import type { Meta, StoryObj } from '@storybook/react';

import { LabelPairedLinkSimpleXlRegularIcon } from '../src/react/LabelPaired';

const meta = {
  title: 'label-paired/LabelPairedLinkSimpleXlRegularIcon',
  component: LabelPairedLinkSimpleXlRegularIcon,
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
} satisfies Meta<typeof LabelPairedLinkSimpleXlRegularIcon>;

export default meta;

type Story = StoryObj<typeof LabelPairedLinkSimpleXlRegularIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};

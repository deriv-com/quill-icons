import type { Meta, StoryObj } from '@storybook/react';

import { LabelPairedLightUserTieCircleDollarSmBoldIcon } from '../src/react/LabelPaired';

const meta = {
  title: 'label-paired/LabelPairedLightUserTieCircleDollarSmBoldIcon',
  component: LabelPairedLightUserTieCircleDollarSmBoldIcon,
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
} satisfies Meta<typeof LabelPairedLightUserTieCircleDollarSmBoldIcon>;

export default meta;

type Story = StoryObj<typeof LabelPairedLightUserTieCircleDollarSmBoldIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};

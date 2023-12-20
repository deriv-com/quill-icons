import type { Meta, StoryObj } from '@storybook/react';

import { LabelPairedLightUserTieCircleDollarXlBoldIcon } from '../src/react/LabelPaired';

const meta = {
  title: 'label-paired/LabelPairedLightUserTieCircleDollarXlBoldIcon',
  component: LabelPairedLightUserTieCircleDollarXlBoldIcon,
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
} satisfies Meta<typeof LabelPairedLightUserTieCircleDollarXlBoldIcon>;

export default meta;

type Story = StoryObj<typeof LabelPairedLightUserTieCircleDollarXlBoldIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};

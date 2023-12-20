import type { Meta, StoryObj } from '@storybook/react';

import { LabelPairedLightUserTieCircleDollarSmRegularIcon } from '../src/react/LabelPaired';

const meta = {
  title: 'label-paired/LabelPairedLightUserTieCircleDollarSmRegularIcon',
  component: LabelPairedLightUserTieCircleDollarSmRegularIcon,
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
} satisfies Meta<typeof LabelPairedLightUserTieCircleDollarSmRegularIcon>;

export default meta;

type Story = StoryObj<typeof LabelPairedLightUserTieCircleDollarSmRegularIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};

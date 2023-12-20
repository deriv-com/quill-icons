import type { Meta, StoryObj } from '@storybook/react';

import { LabelPairedLightUserTieCircleDollarLgRegularIcon } from '../src/react/LabelPaired';

const meta = {
  title: 'label-paired/LabelPairedLightUserTieCircleDollarLgRegularIcon',
  component: LabelPairedLightUserTieCircleDollarLgRegularIcon,
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
} satisfies Meta<typeof LabelPairedLightUserTieCircleDollarLgRegularIcon>;

export default meta;

type Story = StoryObj<typeof LabelPairedLightUserTieCircleDollarLgRegularIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};

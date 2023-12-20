import type { Meta, StoryObj } from '@storybook/react';

import { LabelPairedDerivP2pXlRegularIcon } from '../src/react/LabelPaired';

const meta = {
  title: 'label-paired/LabelPairedDerivP2pXlRegularIcon',
  component: LabelPairedDerivP2pXlRegularIcon,
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
} satisfies Meta<typeof LabelPairedDerivP2pXlRegularIcon>;

export default meta;

type Story = StoryObj<typeof LabelPairedDerivP2pXlRegularIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};

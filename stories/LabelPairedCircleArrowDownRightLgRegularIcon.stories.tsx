import type { Meta, StoryObj } from '@storybook/react';

import { LabelPairedCircleArrowDownRightLgRegularIcon } from '../src/react/LabelPaired';

const meta = {
  title: 'label-paired/LabelPairedCircleArrowDownRightLgRegularIcon',
  component: LabelPairedCircleArrowDownRightLgRegularIcon,
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
} satisfies Meta<typeof LabelPairedCircleArrowDownRightLgRegularIcon>;

export default meta;

type Story = StoryObj<typeof LabelPairedCircleArrowDownRightLgRegularIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};

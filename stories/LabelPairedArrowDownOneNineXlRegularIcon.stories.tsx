import type { Meta, StoryObj } from '@storybook/react';

import { LabelPairedArrowDownOneNineXlRegularIcon } from '../src/react/LabelPaired';

const meta = {
  title: 'label-paired/LabelPairedArrowDownOneNineXlRegularIcon',
  component: LabelPairedArrowDownOneNineXlRegularIcon,
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
} satisfies Meta<typeof LabelPairedArrowDownOneNineXlRegularIcon>;

export default meta;

type Story = StoryObj<typeof LabelPairedArrowDownOneNineXlRegularIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
